import React, { FC, useRef, useEffect } from 'react';
import Konva from 'konva';
import { Rect } from 'react-konva';


const Rectangle: FC<PropTypes.IRectangleProps> = ({
  annotation,
  isSelected,
  onTransform,
  onSelectAnnotation,
  tRef,
}: any) => {
  const rect: any = useRef();

  React.useEffect(() => {
    console.log(isSelected)
    if (isSelected) {
      tRef.current.setNode(rect.current);
      tRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  // useEffect(() => {
  //   if (isSelected) {
  //     // we need to attach transformer manually
  //     rect.current.setNode(shapeRef.current);
  //     rect.current.getLayer().batchDraw();
  //   }
  // }, [])

  return (
    <Rect
      x={annotation.x}
      y={annotation.y}
      width={annotation.width}
      height={annotation.height}

      // force no scaling
      // otherwise Transformer will change it
      scaleX={1}
      scaleY={1}
      stroke={annotation.stroke}
      strokeWidth={5}
      name={annotation.name}
      
      // save state on dragend or transformend
      onDragEnd={(evt) => handleChange(evt, onTransform)}
      onTransformEnd={(evt) => handleChange(evt, onTransform)}
      onMouseEnter={(evt) => handleMouseEnter(evt, rect)}
      onMouseLeave={(evt) => handleMouseLeave(evt, rect)}

      onClick={onSelectAnnotation}
      draggable
      
      ref={rect}
    />
  );
}

const handleChange = (evt: Konva.KonvaEventObject<DragEvent | Event>, onTransform: any) => {
  const shape = evt.target;
  // take a look into width and height properties
  // by default Transformer will change scaleX and scaleY
  // while transforming
  // so we need to adjust that properties to width and height
  onTransform({
    x: shape.x(),
    y: shape.y(),
    width: shape.width() * shape.scaleX(),
    height: shape.height() * shape.scaleY(),
    rotation: shape.rotation(),
  });
};

// if use rect.draw(), the new rectangle will cover its transformer
const handleMouseEnter = (event: Konva.KonvaEventObject<MouseEvent>, rect: any) => {
  rect.current.stroke('#3DF6FF');
  rect.current.getStage().container().style.cursor = 'move';

  // rect.draw();
  rect.current.getLayer().draw();
};

const handleMouseLeave = (event: Konva.KonvaEventObject<MouseEvent>, rect: any) => {
  rect.current.stroke('#00A3AA');
  rect.current.getStage().container().style.cursor = 'crosshair';
  // rect.draw();
  rect.current.getLayer().draw();
};

export default Rectangle;
