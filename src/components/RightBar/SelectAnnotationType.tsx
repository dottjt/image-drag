import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Select from 'react-select';
import { ValueType } from "react-select/src/types";

import { 
  ANNOTATION_TYPE_POKEMON,
  ANNOTATION_TYPE_HUMAN,

  ANNOTATION_TYPE_ARRAY, 
  annotationTypeReadable 
} from '../../util/const';
import { generateOptionType } from '../../util/helper';

const SelectAnnotationType:FC<PropTypes.ISelectAnnotationTypeProps> = ({ 
  annotations,
  setAnnotations,
  
  selectedAnnotation,
}: PropTypes.ISelectAnnotationTypeProps) => {

  const selectedAnnotationTypeOption: Util.OptionType = 
    generateOptionType(selectedAnnotation && selectedAnnotation.type || '', annotationTypeReadable(selectedAnnotation && selectedAnnotation.type || ''))

  const annotationTypeOptions: Util.OptionType[] = 
    ANNOTATION_TYPE_ARRAY.map((annotationType: string): Util.OptionType => 
      generateOptionType(annotationType, annotationTypeReadable(annotationType)));

  return (
    <div className='select__annotation'>
      <Select
        value={selectedAnnotationTypeOption}
        onChange={(selectedOption: ValueType<Util.OptionType>) => {
          if (selectedAnnotation) {
            const selectedOptionType = selectedOption as Util.OptionType;
            const updateAnnotations = annotations.map((annotation: Util.Annotation) => (
              annotation.name === selectedAnnotation.name ? (
                { 
                  ...annotation, 
                  type: selectedOptionType.value, 
                  ...(selectedOptionType.value === ANNOTATION_TYPE_POKEMON ? { human: undefined } : {}),
                }
              ) : (
                annotation
              )
            ));
            setAnnotations(updateAnnotations);
          }
        }}
        options={annotationTypeOptions}
      />

    </div>
  );
}

// const annotationTypeReadable = 

export default SelectAnnotationType;
