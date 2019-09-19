import React from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import uuidv4 from 'uuid/v4';

import Rectangle from './Rectangle/Rectangle';
import RectTransformer from './Rectangle/RectTransformer';
import AnnotationImage from './AnnotationImage/AnnotationImage';
import './App.css';

class ImageAnnotator extends React.Component<PropTypes.IImageAnnotatorProps, PropTypes.IImageAnnotatorState> {
  img: any;
  // NOTE: I will probably need to pass in the image into here.

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
    if (clickedOnTransformer) {
      return;
    }

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
            x: newRectX,
            y: newRectY,
            width: mousePos.x - newRectX,
            height: mousePos.y - newRectY, // this was just mousePos not mousePos.y, so I will have to look into this.
            name: `rect${annotationCount + 1}`,
            stroke: '#00A3AA',
            key: uuidv4(),
          });
          setAnnotations(annotations);
          return this.setState({ mouseDraw: true });
        }
        annotations[annotationCount].width = mousePos.x - newRectX;
        annotations[annotationCount].height = mousePos.y - newRectY;
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
    const { annotations } = this.props;
    const { selectedShapeName, mouseDown } = this.state;
    const { handleStageMouseDown, handleNewRectChange, handleRectChange, handleStageMouseUp } = this;

    return (
      <div id='app'>
        <Stage
          ref={(node) => { this.stage = node; }}
          container='app'
          width={994}
          height={640}
          onMouseDown={handleStageMouseDown}
          onTouchStart={handleStageMouseDown}
          onMouseMove={mouseDown && handleNewRectChange}
          onTouchMove={mouseDown && handleNewRectChange}
          onMouseUp={mouseDown && handleStageMouseUp}
          onTouchEnd={mouseDown && handleStageMouseUp}
        >
          <Layer>
            {annotations.map((rect, i) => (
              <Rectangle
                sclassName="rect"
                key={rect.key}
                {...rect}
                onTransform={(newProps: any) => {
                  handleRectChange(i, newProps);
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
            <AnnotationImage />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default ImageAnnotator;
