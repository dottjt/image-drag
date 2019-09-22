import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

import { SUBMIT_ANNOTATIONS } from '../../graphql/mutations';

import SelectPokemon from './SelectPokemon';
import SelectAnnotation from './SelectAnnotation';

const RightBar:FC<PropTypes.IRightBarProps> = ({ 
  annotations,
}: PropTypes.IRightBarProps) => {

  const [selectedAnnotation, setSelectedAnnotation] = useState(undefined);
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  const [pokemonSearchString, setPokemonSearchString] = useState('');

  const [submitAnnotations] = useMutation(SUBMIT_ANNOTATIONS);

  console.log('right bar refersh')

  return (
    <div className='right_bar'>
      <div className='right_bar__section'>
        <h3 className='right_bar__section__title'>
          Select Annotation
        </h3>
        <SelectAnnotation
          annotations={annotations}

          selectedAnnotation={selectedAnnotation}
          setSelectedAnnotation={setSelectedAnnotation}
        />
      </div>
      {selectedAnnotation && (
        <div className='right_bar__section'>
          <h3 className='right_bar__section__title'>
            Select Pokemon
          </h3>
          <SelectPokemon
            pokemonSearchString={pokemonSearchString}
            setPokemonSearchString={setPokemonSearchString}

            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}          
          />
        </div>
      )}
      {annotations.length > 0 && (
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
