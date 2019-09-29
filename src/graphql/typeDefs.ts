const typeDefs = `
  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    display_name: String!
    email: String!
    avatar: String
    providers: [Provider]
    admin: Boolean
  }

  type Provider {
    provider: String
    user_id: ID
    id: ID
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
    user_id: ID

    name: String
    type: String
    stroke: String
    key: String

    coordinates: [Coordinate]
  }

  input Coordinate {
    x: Int
    y: Int
  }

  type Annotation {
    id: ID
    user: User
    image: Image
    pokemon: Pokemon

    name: String
    stroke: String
    key: String

    coordinates: [Coordinate]
  }

  type Human {
    id: ID
    human_id: String
    name: String
    sprite: String
  }

  type Pokemon {
    id: ID
    pokemon_id: String
    name: String
    sprite: String
  }

  // Gallery
  input FilterQuery {
    sort: String
  }
`;

export default typeDefs;