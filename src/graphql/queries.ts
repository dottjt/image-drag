import gql from 'graphql-tag';

export const GET_IMAGES = gql`{
  getImages {
    id    
    url
    type
    height
    width
    # annotations
    # annotationCategories  
  }
}`;

export const GET_POKEMON = gql`
  query GetPokemon($pokemonName: String) {
    getPokemon(pokemonName: $pokemonName) {
      id
      name
      sprite
    }
  }
`;
