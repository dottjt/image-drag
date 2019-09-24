import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

import { SUBMIT_ANNOTATIONS } from '../../graphql/mutations';

import SelectPokemon from './SelectPokemon';
import SelectAnnotation from './SelectAnnotation';
import SelectAnnotationType from './SelectAnnotationType';

const RightBar:FC<PropTypes.IRightBarProps> = ({ 
  annotations,
  setAnnotations,

  selectedAnnotation,

  setSelectedAnnotationName,
}: PropTypes.IRightBarProps) => {

  const [pokemonSearchString, setPokemonSearchString] = useState('');
  const [submitAnnotations] = useMutation(SUBMIT_ANNOTATIONS);

  return (
    <div className='right_bar'>
      <div className='right_bar__section'>
        <h3 className='right_bar__section__title'>
          Select Annotation
        </h3>
        <SelectAnnotation
          annotations={annotations}
          setSelectedAnnotationName={setSelectedAnnotationName}
          
          selectedAnnotation={selectedAnnotation}
        />
      </div>
      {selectedAnnotation && (
        <div className='right_bar__section'>
          <h3 className='right_bar__section__title'>
            Select Annotation Type
          </h3>
          <SelectAnnotationType
            annotations={annotations}
            setAnnotations={setAnnotations}
            
            selectedAnnotation={selectedAnnotation}
          />
        </div>
      )}
      {annotations.length > 0 && selectedAnnotation && selectedAnnotation.type && (
        <div className='right_bar__section'>
          <h3 className='right_bar__section__title'>
            Select Pokemon
          </h3>
          <SelectPokemon
            pokemonSearchString={pokemonSearchString}
            setPokemonSearchString={setPokemonSearchString}

            annotations={annotations}
            setAnnotations={setAnnotations}
            
            selectedAnnotation={selectedAnnotation}
          />
        </div>
      )}
      {annotations.length > 0 && selectedAnnotation && selectedAnnotation.type && (
        <div className='right_bar__section'>
          <button 
            className='right_bar__section--submit' 
            onClick={() => submitAnnotations({ variables: { annotations } })}>
              Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default RightBar;
