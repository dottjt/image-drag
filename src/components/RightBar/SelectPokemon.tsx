import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { SEARCH_POKEMON } from '../../graphql/mutations';

const SelectPokemon:FC<PropTypes.ISelectPokemonProps> = ({
  pokemonSearchString,
  setPokemonSearchString,
  selectedPokemon,
  setSelectedPokemon,
}: PropTypes.ISelectPokemonProps) => {
  const [searchPokemon, { data }] = useMutation(SEARCH_POKEMON);

  return (
    <div className='select__pokemon'>
      <input
        className='select__input'
        type='text'
        value={pokemonSearchString} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPokemonSearchString(event.target.value);
          searchPokemon({ variables: { pokemonName: event.target.value } });
        }}
      />
      {data.searchedPokemon.length > 1 && (
        <div className='select__pokemon__results'>
          {data.searchedPokemon.map((pokemon: Util.Pokemon) => (
            <div>
              <h4>{pokemon.name}</h4><span>{pokemon.sprite}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectPokemon;
