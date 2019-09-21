import React, { FC, useState } from 'react';

import ImageAnnotator from '../components/ImageAnnotator/ImageAnnotator';
import RightBar from '../components/RightBar/RightBar';

import { useQuery } from '@apollo/react-hooks';

import { GET_IMAGES } from '../graphql/queries';

const Gallery:FC<PropTypes.IGalleryProps> = () => {
  const { data, loading } = useQuery(GET_IMAGES);

  return (
    <div className='layout'>
      
    </div>
  )
};

export default Gallery;
