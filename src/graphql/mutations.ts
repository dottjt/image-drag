import gql from 'graphql-tag';

export const SUBMIT_ANNOTATIONS = gql`
  mutation SubmitAnnotations($annotations: [Annotation]) {
    submitAnnotations(pokemonName: $pokemonName) @client
  }
`;
