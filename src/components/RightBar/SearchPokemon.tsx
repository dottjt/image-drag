import React, { FC, useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '../../graphql/queries';

const SearchPokemon:FC<PropTypes.ISearchPokemonProps> = ({
  pokemonSearchString,
  setPokemonSearchString,

  pokemonSearchPosition,
  setPokemonSearchPosition,

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
          setPokemonSearchPosition(undefined);
          setPokemonSearchString(event.target.value);
        }}
        onKeyDown={(event) => {
          switch(event.keyCode) {
            case 38: { // ArrowUp
              if (pokemonSearchPosition === undefined || pokemonSearchPosition === 0) return;
              setPokemonSearchPosition(pokemonSearchPosition - 1);
            };
            case 40: { // ArrowDown
              if (pokemonSearchPosition === undefined || pokemonSearchPosition === data.getPokemon.length - 1) return;
              setPokemonSearchPosition(pokemonSearchPosition + 1);
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
            pokemonSearchPosition={undefined}
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
                pokemonSearchPosition={pokemonSearchPosition}
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
  isSelectedPokemon,
  setSelectedPokemon,
  pokemonSearchPosition,
}: any) => (
  <div
    className={`
      select__pokemon__result
      ${pokemonSearchPosition ? 'select__pokemon__result--pre-selected': ''}
      ${isSelectedPokemon ? 'select__pokemon__result--selected' : ''}
    `}
    onClick={(event) => setSelectedPokemon(pokemon)}
    // NOTE: I don't know if this does anything, will have to look into it.
    // Maybe this needs to be onKeyDown?
    onKeyPress={(event) => event.keyCode === 13 ? setSelectedPokemon(pokemon) : null}
  >
    <h4 className='select__pokemon__result--name'>{pokemon.name}</h4>
    <img className='select__pokemon__result--sprite' src={pokemon.sprite} />
  </div>
);






export default SearchPokemon;
