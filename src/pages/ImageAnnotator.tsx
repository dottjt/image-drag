import React, { FC, useCallback, useState } from 'react';

import ImageAnnotatorCanvas from '../components/ImageAnnotatorCanvas/ImageAnnotatorCanvas';
import Loading from '../components/Loading';
import RightBar from '../components/RightBar/RightBar';

import { useQuery } from '@apollo/react-hooks';

import { GET_NEW_IMAGE } from '../graphql/queries';

const ImageAnnotator:FC<PropTypes.IImageAnnotatorProps> = ({
  image_id,
}: PropTypes.IImageAnnotatorProps) => {
  const { data, loading } = useQuery(GET_NEW_IMAGE, { variables: { image_id }});

  const [annotations, setAnnotations] = useState<Util.Annotation[]>([]);
  const [annotationCount, setAnnotationCount] = useState<number>(0);

  const [selectedAnnotationName, setSelectedAnnotationName] = useState<string>('');

  // NOTE: Force Update Function
  const [, updateState] = useState<{}>();
  const forceUpdate = useCallback(() => updateState({}), []);

  const selectedAnnotation = annotations.find(annotation => annotation.name === selectedAnnotationName);

  if (loading) return <Loading loading={loading}/>

  console.log(data);

  return (
    <div className='layout'>
      <div className='layout__annotation'>
        <div className='layout__annotation__left'>
          <ImageAnnotatorCanvas
            currentImage={data.getNewImage}
            selectedAnnotation={selectedAnnotation}

            annotations={annotations}
            setAnnotations={setAnnotations}

            annotationCount={annotationCount}
            setAnnotationCount={setAnnotationCount}

            selectedAnnotationName={selectedAnnotationName}
            setSelectedAnnotationName={setSelectedAnnotationName}

            forceUpdate={forceUpdate}
          />
        </div>
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

export default ImageAnnotator;
