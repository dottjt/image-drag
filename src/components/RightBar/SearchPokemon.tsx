import React, { FC, useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '../../graphql/queries';

const SearchPokemon:FC<PropTypes.ISearchPokemonProps> = ({
  pokemonSearchString,
  setPokemonSearchString,

  annotations,
  setAnnotations,
  
  selectedAnnotation,
}: PropTypes.ISearchPokemonProps) => {

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
      {selectedAnnotation && selectedAnnotation.pokemon &&
        (!selectedAnnotation.pokemon.name.includes(pokemonSearchString) || pokemonSearchString === '') && (
          <SearchPokemonResult
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
              <SearchPokemonResult 
                key={pokemon.id}
                pokemon={pokemon}
                isSelectedPokemon={selectedAnnotation && selectedAnnotation.pokemon && selectedAnnotation.pokemon.id === pokemon.id}
                setSelectedPokemon={(pokemon: Util.Pokemon) => {
                  if (selectedAnnotation) {
                    const updateAnnotations = annotations.map((annotation: Util.Annotation) => (
                      annotation.name === selectedAnnotation.name ? (
                        { ...annotation, pokemon, }
                      ) : (
                        annotation
                      )
                    ));
                    setAnnotations(updateAnnotations);  
                  }
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  )
}

const SearchPokemonResult:FC<PropTypes.ISearchPokemonResultProps> = ({
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


  



export default SearchPokemon;
