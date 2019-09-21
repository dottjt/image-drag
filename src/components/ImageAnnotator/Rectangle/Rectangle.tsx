import React from 'react';
import Konva from 'konva';
import { Rect } from 'react-konva';


class Rectangle extends React.Component<PropTypes.IRectangleProps, {}> {
  rect: any;

  componentDidUpdate() {
    // this.rect.getLayer().draw();
    this.rect.getLayer().batchDraw();
  }

  handleChange = (evt: Konva.KonvaEventObject<DragEvent>) => {
    const shape = evt.target;
    // take a look into width and height properties
    // by default Transformer will change scaleX and scaleY
    // while transforming
    // so we need to adjust that properties to width and height
    this.props.onTransform({
      x: shape.x(),
      y: shape.y(),
      width: shape.width() * shape.scaleX(),
      height: shape.height() * shape.scaleY(),
      rotation: shape.rotation(),
    });
  };

  // if use rect.draw(), the new rectangle will cover its transformer
  handleMouseEnter = (event: Konva.KonvaEventObject<MouseEvent>) => {
    this.rect.stroke('#3DF6FF');
    this.rect.getStage().container().style.cursor = 'move';

    // this.rect.draw();
    this.rect.getLayer().draw();
  };

  handleMouseLeave = (event: Konva.KonvaEventObject<MouseEvent>) => {
    this.rect.stroke('#00A3AA');
    this.rect.getStage().container().style.cursor = 'crosshair';
    // this.rect.draw();
    this.rect.getLayer().draw();
  };

  render() {
    const { 
      // x1y1,
      // x1y2,
      // x2y1,
      // x2y2,
      x,
      y,
      width,
      height,
      name,
      stroke,
    } = this.props;
    return (
      <Rect
        // x={x1y1}
        // y={x2y1}
        // width={x1y1- x1y2}
        // height={x2y1- x2y2}
        x={x}
        y={y}
        width={width}
        height={height}

        // force no scaling
        // otherwise Transformer will change it
        scaleX={1}
        scaleY={1}
        stroke={stroke}
        strokeWidth={5}
        name={name}
        
        // save state on dragend or transformend
        onDragEnd={this.handleChange}
        onTransformEnd={this.handleChange}
        
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}

        draggable
        
        ref={(node) => { this.rect = node; }}
      />
    );
  }
}

export default Rectangle;
