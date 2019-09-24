import React, { FC, useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '../../graphql/queries';

const SearchPokemon:FC<PropTypes.ISearchPokemonProps> = ({
  pokemonSearchString,
  setPokemonSearchString,

  selectedPokemonSearch, 
  setSelectedPokemonSearch,

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
        onKeyDown={(event) => {
          switch(event.keyCode) {
            case 38: { // ArrowUp

            };
            case 40: { // ArrowDown

            };
          }  
        }}
      />
      {selectedAnnotation && selectedAnnotation.pokemon && !(data.getPokemon.length > 0) &&
        (
          !selectedAnnotation.pokemon.name.includes(pokemonSearchString) || 
          pokemonSearchString === ''
        ) && (
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
      {!loading && pokemonSearchString.length > 0 && data.getPokemon.length === 0 && <h5>Sorry, this Pokemon doesn't exist!</h5>}
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
                    setPokemonSearchString('');
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
    // NOTE: I don't know if this does anything, will have to look into it.
    onKeyPress={(event) => event.keyCode === 13 ? setSelectedPokemon(pokemon) : null}
  >
    <h4 className='select__pokemon__result--name'>{pokemon.name}</h4>
    <img className='select__pokemon__result--sprite' src={pokemon.sprite} />
  </div>
);


  



export default SearchPokemon;
