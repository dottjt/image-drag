import React, { FC, useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_POKEMON } from '../../graphql/queries';

const SelectPokemon:FC<PropTypes.ISelectPokemonProps> = ({
  pokemonSearchString,
  setPokemonSearchString,

  selectedPokemon,
  setSelectedPokemon,
}: PropTypes.ISelectPokemonProps) => {

  const { data, loading } = useQuery(SEARCH_POKEMON, {
    variables: { pokemonName: pokemonSearchString },
  });

  if (loading) {
    return (
      <div className='select__pokemon'>
        <PulseLoader
          sizeUnit={"px"}
          size={30}
          color={'#5b00a7'}
          loading
        />
      </div>
    );
  }

  return (
    <div className='select__pokemon'>
      <input
        className='select__input'
        type='text'
        value={pokemonSearchString} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPokemonSearchString(event.target.value);
        }}
      />
      {data.searchedPokemon.length > 1 && (
        <div className='select__pokemon__results'>
          {data.searchedPokemon.map((pokemon: Util.Pokemon) => (
            <div
              className='select__pokemon__result'
              onClick={(event) => setSelectedPokemon(pokemon)}
            >
              <h4>{pokemon.name}</h4><span>{pokemon.sprite}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectPokemon;
