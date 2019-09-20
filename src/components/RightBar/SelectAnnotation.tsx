import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Select from 'react-select';
import { ValueType } from "react-select/src/types";

type OptionType = { label: string; value: number };

// import { SEARCH_POKEMON } from '../../graphql/queries';
// import { Util } from 'konva/types/Util';

const SelectAnnotation:FC<PropTypes.ISelectAnnotationProps> = ({ 
  annotations,
  selectedAnnotation,
  setSelectedAnnotation,
 }: PropTypes.ISelectAnnotationProps) => {

  const annotationOptions: any = annotations.map((annotation: Util.Annotation): { value: string, label: string } => ({
    value: annotation.name,
    label: annotation.name,
  }));

  return (
    <div className='select__annotation'>
      <Select
        value={selectedAnnotation}
        onChange={(selectedOption: ValueType<any>) => {
          setSelectedAnnotation(selectedOption);
        }}
        options={annotationOptions}
      />

    </div>
  )
}

export default SelectAnnotation;
