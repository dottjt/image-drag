import React, { FC, useState } from 'react';

import ImageAnnotator from '../components/ImageAnnotatorCanvas/ImageAnnotatorCanvas';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import RightBar from '../components/RightBar/RightBar';

import GalleryImageSearch from '../components/GalleryImageSearch/GalleryImageSearch';

import { useQuery } from '@apollo/react-hooks';

import { GET_NEW_IMAGE } from '../graphql/queries';

const Gallery:FC<PropTypes.IGalleryProps> = () => {

  return (
    <div className='layout'>
      <NavBar/>
      <div className='layout__page'>
        <GalleryImageSearch
          
        />
      </div>
    </div>
  )
};

export default Gallery;
