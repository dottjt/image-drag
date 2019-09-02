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
    name: string;
    x1y1: number;
    x1y2: number;
    x2y1: number;
    x2y2: number;
  }
}
