import gql from 'graphql-tag';

const GET_CSV = gql`{
  images @client {
    url
    type
    imageHeight
    imageWidth
    annotations {
      name
      x1y1
      x1y2
      x2y1
      x2y2
    }
    annotationCategories
  }
}`;

export default GET_CSV;


