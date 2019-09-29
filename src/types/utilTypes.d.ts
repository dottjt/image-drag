declare namespace Util {
  export type User = {
    id: string;
    display_name: string;
    email: string;
    password: string;
    providers: Provider[];
    admin: boolean;
  }

  export type Provider = {
    provider: string;
    user_id: string;
    id: string;
  }

  export type Image = {
    url: string;
    type: string;
    height: number;
    width: number;
    annotations: Annotation[];
    annotationCategories: string[];
  }

  export type Annotation = {
    pokemon?: Pokemon;
    human?: Human;

    name: string;
    type: string;
    stroke: string;
    key: string;

    coordinates: Coordinate[];
  }

  export type Coordinate = {
    x: number;
    y: number;
  }

  export type Human = {
    id: string;
    human_id: string;
    name: string;
    sprite: string;
  }

  export type Pokemon = {
    id: string;
    pokemon_id: string;
    name: string;
    sprite: string;
  }

  export type OptionType = { 
    label: string; 
    value: string;
  }

  export type FilterQuery = { 
    sort: string; 
  }
}
