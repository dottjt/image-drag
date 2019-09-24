import React, { FC, useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '../../graphql/queries';

const SelectPokemon:FC<PropTypes.ISelectPokemonProps> = ({
  pokemonSearchString,
  setPokemonSearchString,

  annotations,
  setAnnotations,
  
  selectedAnnotation,
}: PropTypes.ISelectPokemonProps) => {

  const { data, loading } = useQuery(GET_POKEMON, {
    variables: { pokemonName: pokemonSearchString },
  });

  return (
    <div className='select__pokemon'>
      <input
        className='select__input'
        type='text'
        value={pokemonSearchString} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPokemonSearchString(event.target.value);
        }}
      />
      {selectedAnnotation.pokemon &&
        (!selectedAnnotation.pokemon.name.includes(pokemonSearchString) || pokemonSearchString === '') && (
          <SelectPokemonResult
            pokemon={selectedAnnotation.pokemon}
            isSelectedPokemon
            setSelectedPokemon={() => null}
          />
        )
      }
      {loading && (
        <PulseLoader
          sizeUnit={"px"}
          size={8}
          color={'#5b00a7'}
          loading
        />
      )}
      {!loading && (
        <div className='select__pokemon__results'>
          {data.getPokemon.map((pokemon: Util.Pokemon) => {
            return (
              <SelectPokemonResult 
                key={pokemon.id}
                pokemon={pokemon}
                isSelectedPokemon={selectedPokemon && selectedPokemon.id === pokemon.id}
                setSelectedPokemon={setSelectedPokemon}
              />
            );
          })}
        </div>
      )}
    </div>
  )
}

const SelectPokemonResult:FC<PropTypes.ISelectPokemonResultProps> = ({
  pokemon,
  setSelectedPokemon,
  isSelectedPokemon,
}: any) => (
  <div
    className={`select__pokemon__result ${isSelectedPokemon ? 'select__pokemon__result--selected' : ''}`}
    onClick={(event) => setSelectedPokemon(pokemon)}
  >
    <h4 className='select__pokemon__result--name'>{pokemon.name}</h4>
    <img className='select__pokemon__result--sprite' src={pokemon.sprite} />
  </div>
);


  



export default SelectPokemon;
