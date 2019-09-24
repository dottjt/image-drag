const typeDefs = `
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
    pokemon_id: String 

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