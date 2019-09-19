declare namespace Util {
  export type Image = {
    url: string;
    type: string;
    imageHeight: number;
    imageWidth: number;
    annotations: [Annotation]
    annotationCategories: [string]
  }

  export type Annotation = {
    pokemon: Pokemon;
    x1y1: number;
    x1y2: number;
    x2y1: number;
    x2y2: number;
  }

  export type Pokemon = {
    name: string;
  }
}
