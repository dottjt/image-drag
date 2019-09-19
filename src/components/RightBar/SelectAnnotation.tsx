import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Select from 'react-select';

import { SEARCH_POKEMON } from './graphql/mutations';
import { Util } from 'konva/types/Util';


const SelectAnnotation:FC<PropTypes.ISelectAnnotationProps> = ({ 
  annotations,
  selectedAnnotation,
  setSelectedAnnotation,
 }: PropTypes.ISelectAnnotationProps) => {

  const annotationOptions = annotations.map((annotation: Util.Annotation) => ({
    value: annotation.pokemon.name,
    label: annotation.name,
  }));

  return (
    <div className='select__annotation'>
      <Select
        value={selectedAnnotation}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedAnnotation(event.target.value);
        }}
        options={annotationOptions}
      />

    </div>
  )
}

export default SelectAnnotation;
