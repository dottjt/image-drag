import React, { FC, useEffect, useRef } from 'react';
import { Transformer } from 'react-konva';


const RectTransformer: FC<PropTypes.IRectTransformerProps> = ({
  selectedAnnotationName,
  tRef,
}: PropTypes.IRectTransformerProps) => {

  useEffect(() => {
    checkNode(tRef, selectedAnnotationName);
  })

  return (
    <Transformer
      ref={tRef}
      rotateEnabled
    />
  );
}

const checkNode = (tRef: any, selectedAnnotationName: string) => {
  // here we need to manually attach or detach Transformer node
  const stage = tRef.current.getStage();
  const selectedNode = stage.findOne(`.${selectedAnnotationName}`);
  // do nothing if selected node is already attached
  if (selectedNode === tRef.current.node()) {
    return;
  }

  if (selectedNode) {
    // attach to another node
    tRef.current.attachTo(selectedNode);
  } else {
    // remove transformer
    tRef.current.detach();
  }
};

export default RectTransformer;
