import React, { FC } from 'react';
import Konva from 'konva';
import { Stage, Layer, Image } from 'react-konva';
import uuidv4 from 'uuid/v4';
import useImage from 'use-image';

import Rectangle from './Rectangle/Rectangle';
import RectTransformer from './Rectangle/RectTransformer';

class ImageAnnotator extends React.Component<PropTypes.IImageAnnotatorProps, PropTypes.IImageAnnotatorState> {
  // NOTE: I will probably need to pass in the image into here.
  img: any;
  stage: any;

  state: PropTypes.IImageAnnotatorState = {
    selectedShapeName: '',
    mouseDown: false,
    mouseDraw: false,
    newRectX: 0,
    newRectY: 0,
  };

  componentDidMount() {
    this.img.moveToBottom();
  }

  startDrawImage = (evt: Konva.KonvaEventObject<TouchEvent | MouseEvent>) => {
    const stage = evt.target.getStage();
    if (stage) {
      const mousePos = stage.getPointerPosition();
      if (mousePos) {
        this.setState({
          mouseDown: true,
          newRectX: mousePos.x,
          newRectY: mousePos.y,
          selectedShapeName: '',
        });
      }
    }
  }

  onMouseDown = (evt: Konva.KonvaEventObject<TouchEvent | MouseEvent>) => {
    const { annotations, setAnnotations } = this.props;

    if (evt.target.className === 'Image') {
      this.startDrawImage(evt);
      return;
    }

    // clicked on transformer - do nothing
    if (evt.target.getParent().className === 'Transformer') {
      return;
    }

    // find clicked rect by its name
    const name = evt.target.name();
    const rect = annotations.find(r => r.name === name);
    if (rect) {
      this.setState({ selectedShapeName: name });
      setAnnotations(annotations);
    } else {
      this.setState({ selectedShapeName: '' });
    }
  };

  handleRectChange = (index: number, newProps: any) => {
    const { annotations, setAnnotations } = this.props;

    annotations[index] = {
      ...annotations[index],
      ...newProps,
    };

    setAnnotations(annotations);
  };

  onMouseMove = (event: Konva.KonvaEventObject<MouseEvent | TouchEvent>): void => {
    const { annotations, setAnnotations, annotationCount } = this.props;
    const { newRectX, newRectY, mouseDown } = this.state;

    // So the issue is that within mouseDown, it will automatically 
    if (mouseDown) {
      const stage = event.target.getStage();
      if (stage) {
        const mousePos = stage.getPointerPosition();
        if (mousePos) {
          if (!annotations[annotationCount]) {
            const uuid = uuidv4();
            annotations.push({
              pokemon: undefined,
              // x1y1: mousePos.x,
              // x1y2: mousePos.y,
              // x2y1: newRectX,
              // x2y2: newRectY,
              x: newRectX,
              y: newRectY,
              width: mousePos.x - newRectX,
              height: mousePos.y - newRectY, // this was just mousePos not mousePos.y, so I will have to look into this.
              name: `Annotation ${annotationCount + 1}`,
              stroke: '#00A3AA',
              key: uuid,
            });
          }
          annotations[annotationCount].width = mousePos.x - newRectX;
          annotations[annotationCount].height = mousePos.y - newRectY;
          this.setState({ mouseDraw: true });
          setAnnotations(annotations);
        }
      }
    }
  };

  onMouseUp = () => {
    const { annotationCount, setAnnotationCount } = this.props;
    const { mouseDraw, mouseDown } = this.state;
    if (mouseDown) {
      if (mouseDraw) {
        setAnnotationCount(annotationCount + 1);
        this.setState({ mouseDraw: false });
      }
      this.setState({ mouseDown: false });  
    }
  };

  render() {
    const { annotations, currentImage } = this.props;
    const { selectedShapeName, mouseDown } = this.state;

    return (
      <div className='image__annotator'>
        <div id='app'>
          <Stage
            ref={(node) => { this.stage = node; }}
            container='app'
            width={currentImage.width}
            height={currentImage.height}

            onMouseDown={this.onMouseDown}
            onMouseMove={this.onMouseMove}
            onMouseUp={this.onMouseUp}
          >
            <Layer>
              {annotations.map((annotation: Util.Annotation, i: number) => (
                <Rectangle
                  {...annotation}
                  key={i}
                  onTransform={(newProps: any) => { this.handleRectChange(i, newProps); }}
                />
              ))}
              <RectTransformer selectedShapeName={selectedShapeName} />
            </Layer>
            <Layer ref={(node) => { this.img = node; }}>
              <AnnotationImage currentImage={this.props.currentImage} />
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}

const AnnotationImage:FC<PropTypes.IAnnotationImageProps> = ({
  currentImage,
}: PropTypes.IAnnotationImageProps) => {

  const [image] = useImage(currentImage.url);

  return (
    <Image
      image={image}
    />
  );
}

export default ImageAnnotator;
