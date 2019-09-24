
export const ANNOTATION_TYPE_POKEMON = 'ANNOTATION_TYPE_POKEMON';
export const ANNOTATION_TYPE_HUMAN = 'ANNOTATION_TYPE_HUMAN';

export const ANNOTATION_TYPE_ARRAY = [
  ANNOTATION_TYPE_POKEMON,
  ANNOTATION_TYPE_HUMAN,
];

export const annotationTypeReadable = (type: string): string => {
  switch (type) {
    case ANNOTATION_TYPE_POKEMON: return 'Pokemon';
    case ANNOTATION_TYPE_HUMAN: return 'Human';
    default: throw new Error(`annotationTypeReadable - unknown type - ${type}`);
  }
};
