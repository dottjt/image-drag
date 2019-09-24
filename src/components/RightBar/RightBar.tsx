import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

import { SUBMIT_ANNOTATIONS } from '../../graphql/mutations';
import { ANNOTATION_TYPE_POKEMON } from '../../util/const';

import SearchPokemon from './SearchPokemon';
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
      {!selectedAnnotation && (
        <div className='right_bar__section'>
          <h4>Please draw an annotation first.</h4>
          <h5>ฅ(＾・ω・＾ฅ)</h5>
        </div>
      )}
      {selectedAnnotation && (
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
      )}
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
      {annotations.length > 0 && selectedAnnotation && selectedAnnotation.type === ANNOTATION_TYPE_POKEMON && (
        <div className='right_bar__section'>
          <h3 className='right_bar__section__title'>
            Search Pokemon
          </h3>
          <SearchPokemon
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
          <div 
            className='right_bar__section--submit' 
            onClick={() => submitAnnotations({ variables: { annotations } })}>
              Submit
          </div>
        </div>
      )}

      {/* {annotations.length > 0 && <hr/>} */}
      
      {/* {annotations.map((annotation: Util.Annotation) => {
        return (
          <div className='right_bar__annotations'>
            <div>{annotation.name}</div>
            <div>{annotation.pokemon && annotation.pokemon.name}</div>
          </div>
        );
      })} */}

    </div>
  );
}

export default RightBar;
