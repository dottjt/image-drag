import React, { FC, useEffect, useRef } from 'react';
import { Transformer } from 'react-konva';


const RectTransformer: FC<PropTypes.IRectTransformerProps> = ({
  selectedAnnotationName,
  trRef,
}: PropTypes.IRectTransformerProps) => {

  // useEffect(() => {
  //   // NOTE: The problem is that there is n

  //   // here we need to manually attach or detach Transformer node
  //   const stage = trRef.current.getStage();
  //   const selectedNode = stage.findOne(`.${selectedAnnotationName}`);
  //   // do nothing if selected node is already attached
  //   if (selectedNode === trRef.current.node()) {
  //     return;
  //   }

  //   if (selectedNode) {
  //     // attach to another node
  //     trRef.current.attachTo(selectedNode);
  //   } else {
  //     // remove transformer
  //     trRef.current.detach();
  //   }
  // })

  return (
    <Transformer
      ref={trRef}
      keepRatio={false}
      rotateEnabled={false}
    />
  );
}

export default RectTransformer;
