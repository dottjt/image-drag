declare namespace Util {
  export type Image = {
    url: String
    imageHeight: number;
    imageWidth: number;
    annotations: [Annotation]
  }

  export type Annotation = {
    name: string;
    x1y1: number;
    x1y2: number;
    x2y1: number;
    x2y2: number;
  }
}
