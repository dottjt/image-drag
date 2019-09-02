export const index = `
  type Image = {
    url: String
    type: String
    imageHeight: Int
    imageWidth: Int
    annotations: [Annotation]
    annotationCategories: [String]
  }
  type Annotation = {
    name: String
    x1y1: Int
    x1y2: Int
    x2y1: Int
    x2y2: Int
  }
`;