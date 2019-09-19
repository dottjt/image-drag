import gql from 'graphql-tag';

export const SEARCH_POKEMON = gql`
  mutation SearchPokemon($pokemonName: String) {
    searchPokemon(pokemonName: $pokemonName) @client
  }
`;