import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Select from 'react-select';
import { ValueType } from "react-select/src/types";

import { ANNOTATION_TYPE_ARRAY } from '../../util/const';
import { generateOptionType } from '../../util/helper';


const SelectAnnotationType:FC<PropTypes.ISelectAnnotationTypeProps> = ({ 
  selectedAnnotationType,
  setSelectedAnnotationType,
 }: PropTypes.ISelectAnnotationTypeProps) => {

  const annotationTypeOptions: Util.OptionType[] = 
    ANNOTATION_TYPE_ARRAY.map((annotationType: string): Util.OptionType => 
      generateOptionType(annotationType, annotationType));

  return (
    <div className='select__annotation'>
      <Select
        value={selectedAnnotationType}
        onChange={(selectedOption: ValueType<Util.OptionType>) => {
          setSelectedAnnotationType(selectedOption);
        }}
        options={annotationTypeOptions}
      />

    </div>
  );
}

// const annotationTypeReadable = 

export default SelectAnnotationType;
