import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

import { SEARCH_POKEMON } from './graphql/mutations';

import { Link } from 'react-router5';
import { ROUTE_TITLE } from '../../router';

import { submitAnnotation, selectAnnotation } from './RightBarHandler';

const RightBar:FC<PropTypes.IRightBarProps> = ({ annotations }: any) => {

  const [selectedAnnotation, setSelectedAnnotation] = useState(undefined);
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  const [pokemonSearchString, setPokemonSearchString] = useState('');

  return (
    <div className='rightbar__image'>
      <div className='rightbar__image__section'>
        <h3 className='rightbar__image__section__title'>
          Select Annotation
        </h3>
        <SelectAnnotation
          annotations={annotations}

          selectedAnnotation={selectedAnnotation}
          setSelectedAnnotation={setSelectedAnnotation}
        />
      </div>
      <div className='rightbar__image__section'>
        <h3 className='rightbar__image__section__title'>
          Select Pokemon
        </h3>
        <SelectPokemon
          pokemonSearchString={pokemonSearchString}
          setPokemonSearchString={setPokemonSearchString}

          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}          
        />
      </div>

      <div className='rightbar__image__section'>
        <button className='rightbar__image__section--submit' onClick={submitAnnotation}>Submit</button>
      </div>
    </div>
  );
}


const SelectAnnotation:FC<PropTypes.ISelectAnnotationProps> = ({ 
  annotations,
  selectedAnnotation,
  setSelectedAnnotation,
 }: PropTypes.ISelectAnnotationProps) => {

  return (
    <div>
      <input type="text" value=''/>
      <div>
        {annotations.map((annotation) => (
          <div>
            
            <h4>{annotation.pokemon.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )

}





export default RightBar;
