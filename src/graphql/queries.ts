import gql from 'graphql-tag';


export const GET_CURRENT_USER = gql`{
  getCurrentUser {
    id
    email
    display_name
  }
}`;

export const GET_NEW_IMAGE = gql`
  query GetNewImage($image_id: String) {
    getNewImage(image_id: $image_id) {
      id
      url
      type
      height
      width
      # annotations
      # annotationCategories  
    }
  }
`;

export const GET_POKEMON = gql`
  query GetPokemon($pokemonName: String) {
    getPokemon(pokemonName: $pokemonName) {
      id
      name
      sprite
    }
  }
`;
