import React, { FC, useState } from 'react';

import ImageAnnotator from '../components/ImageAnnotator/ImageAnnotator';
import Loading from '../components/Loading';
import RightBar from '../components/RightBar/RightBar';

import { useQuery } from '@apollo/react-hooks';

import { GET_IMAGES } from '../graphql/queries';

const Annotation:FC<PropTypes.IAnnotationProps> = () => {
  const { data, loading } = useQuery(GET_IMAGES);

  const [annotations, setAnnotations] = useState<Util.Annotation[]>([]);
  const [annotationCount, setAnnotationCount] = useState<number>(0);
  
  console.log(loading);
  console.log(data);

  if (loading) return <Loading loading={loading}/>

  return (
    <div className='layout'>
      <div className='layout__annotation'>
        <ImageAnnotator
          images={data.getImages}
          currentImage={data.getImages[0]}

          annotations={annotations}
          setAnnotations={setAnnotations}

          annotationCount={annotationCount}
          setAnnotationCount={setAnnotationCount}
        />
        <RightBar
          annotations={annotations}
        />
      </div>
    </div>
  )
};

export default Annotation;
