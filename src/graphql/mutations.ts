import gql from 'graphql-tag';

export const SUBMIT_ANNOTATIONS = gql`
  mutation SubmitAnnotations($pokemonName: String) {
    submitAnnotations(pokemonName: $pokemonName) @client
  }
`;
