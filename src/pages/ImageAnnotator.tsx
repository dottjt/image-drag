import React, { FC, useCallback, useState } from 'react';

import ImageAnnotatorLogin from '../components/ImageAnnotatorCanvas/ImageAnnotatorLogin';
import ImageAnnotatorCanvas from '../components/ImageAnnotatorCanvas/ImageAnnotatorCanvas';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
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

  return (
    <div className='layout'>
      <div className='layout__annotation'>
        <div className='layout__annotation__left'>
          {loading ? (
            <Loading loading={loading}/>
          ) : (
            // NOTE: Will need to be replaced with the user object.
            true ? (
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
            ) : (
              <ImageAnnotatorLogin/>
            )
          )}
        </div>
        <RightBar
          annotations={annotations}
          setAnnotations={setAnnotations}

          selectedAnnotation={selectedAnnotation}

          setSelectedAnnotationName={setSelectedAnnotationName}
        />
      </div>
      <NavBar/>

    </div>
  )
};

export default ImageAnnotator;
