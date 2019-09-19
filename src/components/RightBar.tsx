import React, { FC, useEffect, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

import { Link } from 'react-router5';
import { ROUTE_TITLE } from '../router';

import { submitAnnotation, selectAnnotation } from './RightBarHandler';

const RightBar:FC<PropTypes.IRightBarProps> = ({ annotations }) => {

  const [selectedAnnotation, setSelectedAnnotation,] = useState(null);
  const [pokemonSearchString, setPokemonSearchString,] = useState(null);

  return (
    <div className='rightbar__image'>
      <div className='rightbar__image__section'>
        <h3 className='rightbar__image__section__title'>
          Select Annotation
        </h3>
        <SelectAnnotation
          annotations={annotations}
          selectedAnnotation={selectedAnnotation}
        />
      </div>
      <div className='rightbar__image__section'>
        <h3 className='rightbar__image__section__title'>
          Select Pokemon
        </h3>
        <SelectPokemon
          pokemonSearchString={pokemonSearchString}
        />
      </div>

      <div className='rightbar__image__section'>
        <button cnonClick={submitAnnotation}>Submit</button>
      </div>
    </div>
  );
}


const SelectPokemon:FC<{ pokemon: any }> = ({ 
  pokemon ,
}) => {

  return (
    <div>
      <input type="text" value=''/>
      <div>
        {.map(pokemon) => (
          <div>
            <h4>{pokemon.name}</h4>
            {pokemon.sprite}
          </div>
        )}
      </div>
    </div>
  )

}

annotations={annotations}
selectedAnnotation={selectedAnnotation}

const SelectAnnotation:FC<{ annotations: any, selectedAnnotation: any }> = ({ 
  annotations,
  selectedAnnotation,
 }) => {

  return (
    <div>
      <input type="text" value=''/>
      <div>
        {.map(pokemon) => (
          <div>
            <h4>{pokemon.name}</h4>
            {pokemon.sprite}
          </div>
        )}
      </div>
    </div>
    <div>

    </div>
  )

}





export default RightBar;
