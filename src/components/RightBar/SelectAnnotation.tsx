import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Select from 'react-select';
import { ValueType } from "react-select/src/types";

import { generateOptionType } from '../../util/helper';

const SelectAnnotation:FC<PropTypes.ISelectAnnotationProps> = ({ 
  annotations,
  setSelectedAnnotationName,
  selectedAnnotation,
 }: PropTypes.ISelectAnnotationProps) => {

  const selectedAnnotationOption: Util.OptionType = 
    generateOptionType(selectedAnnotation && selectedAnnotation.name || '', selectedAnnotation && selectedAnnotation.name || '')

  const annotationOptions: Util.OptionType[] = annotations.map((annotation: Util.Annotation): Util.OptionType => 
    generateOptionType(annotation.name, annotation.name));

  return (
    <div className='select__annotation'>
      <Select
        value={selectedAnnotationOption}
        onChange={(selectedOption: ValueType<Util.OptionType>) => {
          const selectedOptionType = selectedOption as Util.OptionType;
          setSelectedAnnotationName(selectedOptionType.value);  
        }}
        options={annotationOptions}
      />

    </div>
  )
}

export default SelectAnnotation;
