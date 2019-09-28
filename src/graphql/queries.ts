import gql from 'graphql-tag';


export const GET_CURRENT_USER = gql`{
  getCurrentUser {
    id
    display_name
    email
    # avatar
    # password
    # providers
    # admin
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

export const GET_GALLERY_SEARCH = gql`
  query GetGallerySearch($searchText: String) {
    # doesPokemonExist(searchText: $searchText)

    getGallerySearch(searchText: $searchText) {
      id
      url
      type
      height
      width
      annotations {
        pokemon {
          name 
        }
        coordinates {
          x
          y
        }
      }
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
