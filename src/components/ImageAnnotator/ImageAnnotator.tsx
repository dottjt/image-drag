import React from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import uuidv4 from 'uuid/v4';

import Rectangle from './Rectangle/Rectangle';
import RectTransformer from './Rectangle/RectTransformer';
import AnnotationImage from './AnnotationImage/AnnotationImage';
import './App.css';

class ImageAnnotator extends React.Component<PropTypes.IImageAnnotatorProps, PropTypes.IImageAnnotatorState> {

  // NOTE: I will probably need to pass in the image into here.

  state: PropTypes.IImageAnnotatorState = {
    rectangles: [],
    rectCount: 0,
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
    const { rectangles } = this.state;
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
    const clickedOnTransformer = event.target.getParent().className === 'Transformer';
    if (clickedOnTransformer) {
      return;
    }

    // find clicked rect by its name
    const name = event.target.name();
    const rect = rectangles.find(r => r.name === name);
    if (rect) {
      this.setState({
        selectedShapeName: name,
        rectangles,
      });
    } else {
      this.setState({
        selectedShapeName: '',
      });
    }
  };

  handleRectChange = (index: number, newProps: any) => {
    const { rectangles } = this.state;

    rectangles[index] = {
      ...rectangles[index],
      ...newProps,
    };

    this.setState({ rectangles });
  };

  handleNewRectChange = (event: Konva.KonvaEventObject<MouseEvent>) => {
    const {
      rectangles, rectCount, newRectX, newRectY,
    } = this.state;
    const stage = event.target.getStage();
    if (stage) {
      const mousePos = stage.getPointerPosition();
      if (mousePos) {
        if (!rectangles[rectCount]) {
          rectangles.push({
            pokemon: undefined,
            x: newRectX,
            y: newRectY,
            width: mousePos.x - newRectX,
            height: mousePos.y - newRectY, // this was just mousePos not mousePos.y, so I will have to look into this.
            name: `rect${rectCount + 1}`,
            stroke: '#00A3AA',
            key: uuidv4(),
          });
          return this.setState({ rectangles, mouseDraw: true });
        }
        rectangles[rectCount].width = mousePos.x - newRectX;
        rectangles[rectCount].height = mousePos.y - newRectY;
        return this.setState({ rectangles });
      }
    }
  };

  handleStageMouseUp = () => {
    const { rectCount, mouseDraw } = this.state;
    if (mouseDraw) {
      this.setState({ rectCount: rectCount + 1, mouseDraw: false });
    }
    this.setState({ mouseDown: false });
  };

  render() {
    const {
      state: { rectangles, selectedShapeName, mouseDown },
      handleStageMouseDown,
      handleNewRectChange,
      handleRectChange,
      handleStageMouseUp,
    } = this;

    return (
      <div id='app'>
        <Stage
          ref={(node) => {
            this.stage = node;
          }}
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
            {rectangles.map((rect, i) => (
              <Rectangle
                sclassName="rect"
                key={rect.key}
                {...rect}
                onTransform={(newProps) => {
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
