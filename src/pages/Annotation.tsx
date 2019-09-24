import React, { FC, useCallback, useState } from 'react';

import ImageAnnotator from '../components/ImageAnnotator/ImageAnnotator';
import Loading from '../components/Loading';
import RightBar from '../components/RightBar/RightBar';

import { useQuery } from '@apollo/react-hooks';

import { GET_IMAGES } from '../graphql/queries';

import { ANNOTATION_TYPE_POKEMON } from '../util/const';

const Annotation:FC<PropTypes.IAnnotationProps> = () => {
  const { data, loading } = useQuery(GET_IMAGES);

  const [annotations, setAnnotations] = useState<Util.Annotation[]>([]);
  const [annotationCount, setAnnotationCount] = useState<number>(0);

  const [selectedAnnotationName, setSelectedAnnotationName] = useState<string>('');

  // NOTE: Force Update Function
  const [, updateState] = useState<{}>(); 
  const forceUpdate = useCallback(() => updateState({}), []);

  const selectedAnnotation = annotations.find(annotation => annotation.name === selectedAnnotationName);

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

          selectedAnnotationName={selectedAnnotationName}
          setSelectedAnnotationName={setSelectedAnnotationName}

          forceUpdate={forceUpdate}
        />
        <RightBar
          annotations={annotations}
          setAnnotations={setAnnotations}
          
          selectedAnnotation={selectedAnnotation}

          setSelectedAnnotationName={setSelectedAnnotationName}
        />
      </div>
    </div>
  )
};

export default Annotation;
