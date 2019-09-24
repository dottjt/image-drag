import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Select from 'react-select';
import { ValueType } from "react-select/src/types";

import { ANNOTATION_TYPE_ARRAY, annotationTypeReadable } from '../../util/const';
import { generateOptionType } from '../../util/helper';

const SelectAnnotationType:FC<PropTypes.ISelectAnnotationTypeProps> = ({ 
  annotations,
  setAnnotations,
  
  selectedAnnotation,
}: PropTypes.ISelectAnnotationTypeProps) => {

  const annotationTypeOptions: Util.OptionType[] = 
    ANNOTATION_TYPE_ARRAY.map((annotationType: string): Util.OptionType => 
      generateOptionType(annotationType, annotationTypeReadable(annotationType)));

  return (
    <div className='select__annotation'>
      <Select
        value={selectedAnnotation.type}
        onChange={(selectedOption: ValueType<Util.OptionType>) => {
          const selectedOptionType = selectedOption as Util.OptionType;
          const updateAnnotations = annotations.map((annotation: Util.Annotation) => (
            annotation.name === selectedAnnotation.name ? (
              { ...annotation, type: selectedOptionType.value }
            ) : (
              annotation
            )
          ));
          setAnnotations(updateAnnotations);
        }}
        options={annotationTypeOptions}
      />

    </div>
  );
}

// const annotationTypeReadable = 

export default SelectAnnotationType;
