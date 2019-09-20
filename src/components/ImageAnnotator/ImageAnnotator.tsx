import React, { FC } from 'react';
import Konva from 'konva';
import { Stage, Layer, Image } from 'react-konva';
import uuidv4 from 'uuid/v4';
import useImage from 'use-image';

import Rectangle from './Rectangle/Rectangle';
import RectTransformer from './Rectangle/RectTransformer';
import './App.css';

class ImageAnnotator extends React.Component<PropTypes.IImageAnnotatorProps, PropTypes.IImageAnnotatorState> {
  // NOTE: I will probably need to pass in the image into here.
  img: any;

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

  handleStageMouseDown = (evt: Konva.KonvaEventObject<TouchEvent>) => {
    const { annotations, setAnnotations } = this.props;

    // clicked on stage - clear selection or ready to generate new rectangle
    if (evt.target.className === 'Image') {
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
      return;
    }

    // clicked on transformer - do nothing
    const clickedOnTransformer = evt.target.getParent().className === 'Transformer';
    if (clickedOnTransformer) return;

    // find clicked rect by its name
    const name = evt.target.name();
    const rect = annotations.find(r => r.name === name);
    if (rect) {
      this.setState({ selectedShapeName: name });
      setAnnotations([annotations.concat(rect)]);

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

  handleNewRectChange = (event: Konva.KonvaEventObject<MouseEvent>) => {
    const { annotations, setAnnotations, annotationCount } = this.props;
    const { newRectX, newRectY } = this.state;
    const stage = event.target.getStage();
    if (stage) {
      const mousePos = stage.getPointerPosition();
      if (mousePos) {
        if (!annotations[annotationCount]) {
          annotations.push({
            pokemon: undefined,
            x1y1: mousePos.x,
            x1y2: mousePos.y,
            x2y1: newRectX,
            x2y2: newRectY,
            // x: newRectX,
            // y: newRectY,
            // width: mousePos.x - newRectX,
            // height: mousePos.y - newRectY, // this was just mousePos not mousePos.y, so I will have to look into this.
            name: `rect${annotationCount + 1}`,
            stroke: '#00A3AA',
            key: uuidv4(),
          });
          setAnnotations(annotations);
          return this.setState({ mouseDraw: true });
        }
        // annotations[annotationCount].width = mousePos.x - newRectX;
        // annotations[annotationCount].height = mousePos.y - newRectY;
        return setAnnotations(annotations);
      }
    }
  };

  handleStageMouseUp = () => {
    const { annotationCount, setAnnotationCount } = this.props;
    const { mouseDraw } = this.state;
    if (mouseDraw) {
      setAnnotationCount(annotationCount + 1);
      this.setState({ mouseDraw: false });
    }
    this.setState({ mouseDown: false });
  };

  render() {
    const { annotations, currentImage } = this.props;
    const { selectedShapeName, mouseDown } = this.state;

    return (
      <div id='app'>
        <Stage
          ref={(node) => { this.stage = node; }}
          container='app'
          width={currentImage.width}
          height={currentImage.height}
          onMouseDown={this.handleStageMouseDown}
          onTouchStart={this.handleStageMouseDown}
          onMouseMove={mouseDown && this.handleNewRectChange}
          onTouchMove={mouseDown && this.handleNewRectChange}
          onMouseUp={mouseDown && this.handleStageMouseUp}
          onTouchEnd={mouseDown && this.handleStageMouseUp}
        >
          <Layer>
            {annotations.map((rect, i) => (
              <Rectangle
                className='rect'
                key={rect.key}
                {...rect}
                onTransform={(newProps: any) => {
                  this.handleRectChange(i, newProps);
                }}
              />
            ))}
            <RectTransformer selectedShapeName={selectedShapeName} />
          </Layer>
          <Layer
            ref={(node) => {
              this.img = node;
            }}
          >
            <AnnotationImage currentImage={this.props.currentImage} />
          </Layer>
        </Stage>
      </div>
    );
  }
}

const AnnotationImage:FC<PropTypes.IAnnotationImageProps> = ({
  currentImage,
}: PropTypes.IAnnotationImageProps) => {

  const [image] = useImage(currentImage.url);

  return (
    <div className='image__annotator'>
      <Image
        image={image}
      />
    </div>
  );
}

export default ImageAnnotator;
