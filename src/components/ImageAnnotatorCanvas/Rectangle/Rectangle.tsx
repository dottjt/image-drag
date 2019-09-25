import React, { FC, useRef, useEffect } from 'react';
import Konva from 'konva';
import { Group, Rect, Text, Circle } from 'react-konva';

import RectTransformer from '../Rectangle/RectTransformer';

const Rectangle: FC<PropTypes.IRectangleProps> = ({
  annotations,
  setAnnotations,
  
  annotationCount,
  setAnnotationCount,

  annotation,
  selectedAnnotation,
  setSelectedAnnotationName,

  isSelected,
  onTransform,
  onSelectAnnotation,
  trRef,
}: any) => {
  const group: any = useRef();
  const rect: any = useRef();
  const rectText: any = useRef();
  const removeAnnotationCircle: any = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(rect.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const rectWidth = annotation.coordinates[1].x - annotation.coordinates[0].x;
  const rectHeight = annotation.coordinates[0].y - annotation.coordinates[2].y;

  return (
    <Group
      onDragEnd={(evt) => handleChange(evt, onTransform)}
      onTransformEnd={(evt) => handleChange(evt, onTransform)}
      onMouseEnter={(evt) => handleMouseEnter(evt, group)}
      onMouseLeave={(evt) => handleMouseLeave(evt, group)}
      ref={group}
      draggable
    >
      {isSelected && (
        <Text
          x={annotation.coordinates[0].x + rectWidth} // annotation.coordinates[0].x
          y={annotation.coordinates[0].y} // annotation.coordinates[0].y

          fontSize={16} 
          text={annotation.name} 
          wrap="char" 
          align="right" />
      )}

      {isSelected && (
        <Circle
          x={annotation.coordinates[0].x + rectWidth + 0} // annotation.coordinates[0].x
          y={annotation.coordinates[0].y} // annotation.coordinates[0].y
          radius={70}
          stroke={'black'}
          strokeWidth={1}
          onMouseEnter={() => {
            removeAnnotationCircle.current.getStage().container().style.cursor = 'pointer';
          }}
          onClick={() => {
            const removedAnnotations = annotations.filter(
              (annotation: Util.Annotation) => annotation.name !== selectedAnnotation.name
            ).map(
              (annotation: Util.Annotation, index: number) => ({ ...annotation, name: `Annotation ${index + 1}`})
            );
            
            setAnnotationCount(annotationCount - 1);
            setAnnotations(removedAnnotations);
          }}
          ref={removeAnnotationCircle}
        />
      )}

      <Rect
        name={annotation.name}

        x={annotation.coordinates[0].x} // annotation.coordinates[0].x  
        y={annotation.coordinates[0].y} // annotation.coordinates[0].y
        width={rectWidth} // annotation.coordinates[1].x - annotation.coordinates[0].x
        height={rectHeight} // annotation.coordinates[0].y - annotation.coordinates[2].y 

        scaleX={1}
        scaleY={1}
        fill={isSelected ? '#3DF6FF' : '#00A3AA'}
        strokeWidth={5}
        opacity={0.3}

        onClick={onSelectAnnotation}
        // NOTE: TODO, so you can't put it outside of the image.
        // dragBoundFunc={(pos) => {

        ref={rect}
      />
      {isSelected && (
        <RectTransformer
          selectedAnnotationName={setSelectedAnnotationName}
          trRef={trRef}
        />
      )}
        {/* <Transformer ref={trRef}/> */}

    </Group>
  );
}

const handleChange = (evt: Konva.KonvaEventObject<DragEvent | Event>, onTransform: any) => {
  const shape = evt.target;

  // NOTE: I also need to set the annotation values.

  onTransform({
    x: shape.x(),
    y: shape.y(),
    width: shape.width() * shape.scaleX(),
    height: shape.height() * shape.scaleY(),
    rotation: shape.rotation(),
  });
};

const handleMouseEnter = (event: Konva.KonvaEventObject<MouseEvent>, rect: any) => {
  // rect.current.stroke('#3DF6FF');
  rect.current.getStage().container().style.cursor = 'move';
  rect.current.getLayer().draw();
};

const handleMouseLeave = (event: Konva.KonvaEventObject<MouseEvent>, rect: any) => {
  // rect.current.stroke('#00A3AA');
  rect.current.getStage().container().style.cursor = 'crosshair';
  rect.current.getLayer().draw();
};

export default Rectangle;
