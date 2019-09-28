import React, { FC, useState } from 'react';

import ImageAnnotator from '../components/ImageAnnotatorCanvas/ImageAnnotatorCanvas';
import RightBar from '../components/RightBar/RightBar';
import NavBar from '../components/NavBar';

import { useQuery } from '@apollo/react-hooks';

import { GET_NEW_IMAGE } from '../graphql/queries';

const ImageAnnotatorGallery:FC<PropTypes.IImageAnnotatorGalleryProps> = () => {
  const { data, loading } = useQuery(GET_NEW_IMAGE);

  return (
    <div className='layout'>
      <NavBar/>
      <div>

      </div>
      
    </div>
  )
};

export default ImageAnnotatorGallery;
