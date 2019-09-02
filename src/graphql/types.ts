export const index = `
  type Image = {
    type: String
    url: String
    category: String
    imageHeight: Int
    imageWidth: Int
    annotations: [Annotation]
  }
  type Annotation = {
    name: String
    x1y1: Int
    x1y2: Int
    x2y1: Int
    x2y2: Int
  }
`;