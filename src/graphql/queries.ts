import gql from 'graphql-tag';

export const GET_ANNOTATION = gql`{
  images @client {
    url
    type
    imageHeight
    imageWidth
    annotations {
      name
      x1y1
      x1y2
      x2y1
      x2y2
    }
    annotationCategories
  }
}`;

export const GET_GALLERY = gql`{
  images @client {
    url
    type
    imageHeight
    imageWidth
    annotations {
      name
      x1y1
      x1y2
      x2y1
      x2y2
    }
    annotationCategories
  }
}`;

export const SEARCH_POKEMON = gql`
  query SearchPokemon($pokemonName: String) {
    searchPokemon(pokemonName: $pokemonName) @client
  }
`;
