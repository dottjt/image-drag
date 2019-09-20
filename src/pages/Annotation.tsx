import React, { FC, useState } from 'react';

import ImageAnnotator from '../components/ImageAnnotator/ImageAnnotator';
import Loading from '../components/Loading';
import RightBar from '../components/RightBar/RightBar';

import { useQuery } from '@apollo/react-hooks';

import { GET_ANNOTATION } from '../graphql/queries';

const Annotation:FC<PropTypes.IAnnotationProps> = () => {
  const { data, loading } = useQuery(GET_ANNOTATION);

  const [annotations, setAnnotations] = useState<Util.Annotation[]>([]);
  const [annotationCount, setAnnotationCount] = useState<number>(0);

  console.log(data);
  
  if (loading) return <Loading loading={loading}/>

  return (
    <div className='layout'>
      <ImageAnnotator
        images={data.images}
        currentImage={data.currentImage}

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

export default Annotation;
