import React, { FC, useRef, useEffect } from 'react';
import Konva from 'konva';
import { Group, Rect, Text, Circle } from 'react-konva';


const Rectangle: FC<PropTypes.IRectangleProps> = ({
  annotations,
  setAnnotations,

  annotation,
  selectedAnnotation,

  isSelected,
  onTransform,
  onSelectAnnotation,
  trRef,
}: any) => {
  const rect: any = useRef();
  const removeAnnotationCircle: any = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(rect.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Group>

      {isSelected && (
        <Text fontSize={60} text={annotation.name} wrap="char" align="left" />
      )}

      {isSelected && (
        <Circle
          x={20}
          y={20}
          radius={70}
          stroke={'black'}
          strokeWidth={1}
          onMouseEnter={() => {
            removeAnnotationCircle.current.getStage().container().style.cursor = 'pointer';
          }}
          onClick={() => {
            const removedAnnotations = annotations.filter(
              (annotation: Util.Annotation) => annotation.name !== selectedAnnotation.name
            );
            setAnnotations(removedAnnotations);
          }}
          ref={removeAnnotationCircle}
        />
      )}

      <Rect
        x={annotation.x}
        y={annotation.y}
        width={annotation.width}
        height={annotation.height}

        // NOTE: TODO, so you can't put it outside of the image.
        // dragBoundFunc={(pos) => {

        // }}

        // force no scaling
        // otherwise Transformer will change it
        scaleX={1}
        scaleY={1}
        // stroke={isSelected ? '#3DF6FF' : '#00A3AA'} // annotation.stroke
        fill={isSelected ? '#3DF6FF' : '#00A3AA'}
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
    </Group>
  );
}

const handleChange = (evt: Konva.KonvaEventObject<DragEvent | Event>, onTransform: any) => {
  const shape = evt.target;
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
  // rect.current.stroke('#3DF6FF');
  rect.current.getStage().container().style.cursor = 'move';
  // rect.draw();
  rect.current.getLayer().draw();
};

const handleMouseLeave = (event: Konva.KonvaEventObject<MouseEvent>, rect: any) => {
  // rect.current.stroke('#00A3AA');
  rect.current.getStage().container().style.cursor = 'crosshair';
  // rect.draw();
  rect.current.getLayer().draw();
};

export default Rectangle;
