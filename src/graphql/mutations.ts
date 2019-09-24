import gql from 'graphql-tag';

export const SUBMIT_ANNOTATIONS = gql`
  mutation SubmitAnnotations($annotations: [AnnotationInput]) {
    submitAnnotations(annotations: $annotations)
  }
`;
