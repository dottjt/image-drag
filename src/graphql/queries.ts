import gql from 'graphql-tag';

const GET_CSV = gql`{
  images @client {
    imageHeight
    imageWidth
    annotations {
      name
      x1y1
      x1y2
      x2y1
      x2y2
    }
  }
}`;

export default GET_CSV;


