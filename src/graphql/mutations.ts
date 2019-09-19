import gql from 'graphql-tag';

export const SEARCH_POKEMON = gql`
  mutation SearchPokemon($pokemonName: String) {
    searchPokemon(pokemonName: $pokemonName) @client
  }
`;

export const SUBMIT_ANNOTATIONS = gql`
  mutation SubmitAnnotations($pokemonName: String) {
    submitAnnotations(pokemonName: $pokemonName) @client
  }
`;
