import React, { FC, useState, useRef, useEffect, useCallback } from 'react';
import Konva from 'konva';
import { Stage, Layer, Image, Transformer } from 'react-konva';
import uuidv4 from 'uuid/v4';
import useImage from 'use-image';

import Rectangle from './Rectangle/Rectangle';
import RectTransformer from './Rectangle/RectTransformer';

import { ANNOTATION_TYPE_POKEMON, annotationTypeReadable } from '../../util/const';
import { generateOptionType } from '../../util/helper';

const ImageAnnotator: FC<PropTypes.IImageAnnotatorCanvasProps> = ({
  currentImage,
  selectedAnnotation,

  annotations,
  setAnnotations,

  annotationCount,
  setAnnotationCount,

  selectedAnnotationName,
  setSelectedAnnotationName,

  forceUpdate,
}: PropTypes.IImageAnnotatorCanvasProps) => {
  const img: any = useRef();
  const stage: any = useRef();
  const trRef: any = useRef();

  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [mouseDraw, setMouseDraw] = useState<boolean>(false);
  const [newRectX, setNewRectX] = useState<number>(0);
  const [newRectY, setNewRectY] = useState<number>(0);

  useEffect(() => {
    img.current.moveToBottom();
  });

  return (
    <div className='image__annotator'>
      <div id='image__annotator__app'>
        <Stage
          ref={stage}
          container='image__annotator__app'
          width={currentImage.width}
          height={currentImage.height}

          onMouseDown={(evt) => onMouseDown(
            evt,
            annotations,
            setAnnotations,
            setMouseDown,
            setNewRectX,
            setNewRectY,
            setSelectedAnnotationName,
          )}
          onMouseMove={(evt) => onMouseMove(
            evt,
            annotations,
            setAnnotations,
            annotationCount,
            newRectX,
            newRectY,
            mouseDown,
            setMouseDraw,
            forceUpdate,
          )}
          onMouseUp={() => onMouseUp(
            annotations[annotationCount],
            setSelectedAnnotationName,

            annotationCount,
            setAnnotationCount,

            mouseDraw,
            setMouseDraw,

            mouseDown,
            setMouseDown,
          )}
        >
          <Layer>
            {annotations.map((annotation: Util.Annotation, i: number) => (
              <React.Fragment key={i}>
                <Rectangle
                  annotation={annotation}
                  isSelected={annotation.name === selectedAnnotationName}
                  onTransform={(newProps: any) => handleRectChange(i, newProps, annotations, setAnnotations)}
                  onSelectAnnotation={() => setSelectedAnnotationName(annotation.name)}
                  trRef={trRef}
                />
                {/* {annotation.name === selectedAnnotationName && ( */}
                  {/* // <Transformer ref={trRef}/> */}
                  <RectTransformer
                    selectedAnnotationName={selectedAnnotationName}
                    trRef={trRef}
                  />
                {/* )} */}
              </React.Fragment>
            ))}
          </Layer>
          <Layer ref={img}>
            <AnnotationImage currentImage={currentImage} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

const onMouseDown = (
  evt: Konva.KonvaEventObject<TouchEvent | MouseEvent>,
  annotations: Util.Annotation[],
  setAnnotations: React.Dispatch<React.SetStateAction<Util.Annotation[]>>,
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>,
  setNewRectX: React.Dispatch<React.SetStateAction<number>>,
  setNewRectY: React.Dispatch<React.SetStateAction<number>>,
  setSelectedAnnotationName: React.Dispatch<React.SetStateAction<string>>,
) => {
  console.log('cake')
  if (evt.target.className === 'Image') {
    const stage = evt.target.getStage();
    if (stage) {
      const mousePos = stage.getPointerPosition();
      if (mousePos) {
        setMouseDown(true);
        setNewRectX(mousePos.x);
        setNewRectY(mousePos.y);
        // setSelectedAnnotationName('');
      }
    }
  }

  // clicked on transformer - do nothing
  if (evt.target.getParent().className === 'Transformer') return;

  // find clicked rect by its name
  const name = evt.target.name();
  const annotation = annotations.find((r: Util.Annotation): boolean => r.name === name);
  if (annotation) {
    setSelectedAnnotationName(name);
  } /* else {
    setSelectedAnnotationName('');
  } */
};

const handleRectChange = (
  index: number,
  newProps: any,
  annotations: Util.Annotation[],
  setAnnotations: React.Dispatch<React.SetStateAction<Util.Annotation[]>>,
) => {
  annotations[index] = {
    ...annotations[index],
    ...newProps,
  };

  setAnnotations(annotations);
};

const onMouseMove = (
  event: Konva.KonvaEventObject<MouseEvent | TouchEvent>,
  annotations: Util.Annotation[],
  setAnnotations: React.Dispatch<React.SetStateAction<Util.Annotation[]>>,
  annotationCount: number,

  newRectX: number,
  newRectY: number,
  mouseDown: boolean,
  setMouseDraw: React.Dispatch<React.SetStateAction<boolean>>,
  forceUpdate: any,
): void => {

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
            human: undefined,
            type: ANNOTATION_TYPE_POKEMON,
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

        setMouseDraw(true);
        setAnnotations(annotations);
        forceUpdate();
      }
    }
  }
};

const onMouseUp = (
  latestAnnotation: Util.Annotation,
  setSelectedAnnotationName: React.Dispatch<React.SetStateAction<string>>,

  annotationCount: number,
  setAnnotationCount: React.Dispatch<React.SetStateAction<number>>,

  mouseDraw: boolean,
  setMouseDraw: React.Dispatch<React.SetStateAction<boolean>>,

  mouseDown: boolean,
  setMouseDown: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (mouseDown) {
    if (mouseDraw) {
      setSelectedAnnotationName(latestAnnotation.name);
      setAnnotationCount(annotationCount + 1);
      setMouseDraw(false);
    }
    setMouseDown(false);
  }
};

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
