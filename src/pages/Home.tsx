import React, { FC, useState } from 'react';

import ImageAnnotator from '../components/ImageAnnotator/ImageAnnotator';
import RightBar from '../components/RightBar/RightBar';

const PayslipList:FC<PropTypes.IHomeProps> = ({ images }) => {
  const [annotations, setAnnotations] = useState<Util.Annotation[]>([]);
  const [annotationCount, setAnnotationCount] = useState<number>(0);

  return (
    <div className='layout'>
      <ImageAnnotator
        images={images}

        annotations={annotations}
        setAnnotations={setAnnotations}

        annotationCount={annotationCount}
        setAnnotationCount={setAnnotationCount}
      />
      <RightBar
        annotations={annotations}
      />
    </div>
  )
};

export default PayslipList;
