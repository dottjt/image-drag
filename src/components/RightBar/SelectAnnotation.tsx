import React, { FC, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { SEARCH_POKEMON } from './graphql/mutations';

const SelectAnnotation:FC<PropTypes.ISelectAnnotationProps> = ({ 
  annotations,
  selectedAnnotation,
  setSelectedAnnotation,
 }: PropTypes.ISelectAnnotationProps) => {

  return (
    <div className='select__annotation'>
      <input type="text" value=''/>
      <div>
        {annotations.map((annotation) => (
          <div>
            <h4>{annotation.pokemon.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectAnnotation;
