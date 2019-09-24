import React, { FC, useEffect, useRef } from 'react';
import { Transformer } from 'react-konva';


const RectTransformer: FC<PropTypes.IRectTransformerProps> = ({
  selectedAnnotationName,
  trRef,
}: PropTypes.IRectTransformerProps) => {

  useEffect(() => {
    checkNode(trRef, selectedAnnotationName);
  })

  return (
    <Transformer
      ref={trRef}
      rotateEnabled
    />
  );
}

const checkNode = (trRef: any, selectedAnnotationName: string) => {
  // here we need to manually attach or detach Transformer node
  const stage = trRef.current.getStage();
  const selectedNode = stage.findOne(`.${selectedAnnotationName}`);
  // do nothing if selected node is already attached
  if (selectedNode === trRef.current.node()) {
    return;
  }

  if (selectedNode) {
    // attach to another node
    trRef.current.attachTo(selectedNode);
  } else {
    // remove transformer
    trRef.current.detach();
  }
};

export default RectTransformer;
