const typeDefs = `
  type User {
    id: ID!
    display_name: String!
    email: String!
    password: String!
    providers: [Provider]
    admin: Boolean
  }

  type Image {
    id: ID
    url: String
    type: String
    height: Int
    width: Int
    annotations: [Annotation]
    annotationCategories: [String]
  }

  input AnnotationInput {
    pokemon_id: ID
    human_id: ID
    image_id: ID

    name: String
    type: String
    stroke: String
    key: String

    x: Int
    y: Int
    width: Int
    height: Int
  }

  type Annotation {
    id: ID
    pokemon: Pokemon

    name: String
    type: String
    stroke: String
    key: String
    
    x: Int
    y: Int
    width: Int
    height: Int
  }

  input PokemonInput {
    pokemon_id: String
    name: String
    sprite: String
  }

  type Pokemon {
    id: ID
    pokemon_id: String
    name: String
    sprite: String
  }
`;

export default typeDefs;