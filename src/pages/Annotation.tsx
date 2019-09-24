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

  const [selectedShapeName, setSelectedShapeName] = useState<string>('');
  const [selectedAnnotation, setSelectedAnnotation] = useState<Util.Annotation | undefined>(undefined);
  const [selectedAnnotationType, setSelectedAnnotationType] = useState<string>(ANNOTATION_TYPE_POKEMON);
  const [selectedPokemon, setSelectedPokemon] = useState<Util.Pokemon | undefined>(undefined);

  // NOTE: Force Update Function
  const [, updateState] = useState<{}>(); 
  const forceUpdate = useCallback(() => updateState({}), []);

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

          setSelectedPokemon={setSelectedPokemon}
          setSelectedAnnotation={setSelectedAnnotation}
          setSelectedAnnotationType={setSelectedAnnotationType}

          selectedShapeName={selectedShapeName}
          setSelectedShapeName={setSelectedShapeName}

          forceUpdate={forceUpdate}
        />
        <RightBar
          annotations={annotations}

          selectedAnnotation={selectedAnnotation}
          setSelectedAnnotation={setSelectedAnnotation}

          selectedAnnotationType={selectedAnnotationType}
          setSelectedAnnotationType={setSelectedAnnotationType}
          
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </div>
    </div>
  )
};

export default Annotation;
