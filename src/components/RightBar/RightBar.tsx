import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

import { Link } from 'react-router5';
import { ROUTE_TITLE } from '../../router';

import { SUBMIT_ANNOTATIONS } from '../../graphql/mutations';

import SelectPokemon from './SelectPokemon';
import SelectAnnotation from './SelectAnnotation';

const RightBar:FC<PropTypes.IRightBarProps> = ({ annotations }: any) => {

  const [selectedAnnotation, setSelectedAnnotation] = useState(undefined);
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  const [pokemonSearchString, setPokemonSearchString] = useState('');

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

      <div className='right_bar__section'>
        <button className='right_bar__section--submit' onClick={submitAnnotation}>Submit</button>
      </div>
    </div>
  );
}

const submitAnnotation = () => {

}

export default RightBar;
