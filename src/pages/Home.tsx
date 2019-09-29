import React, { FC, useState } from 'react';

import GalleryImageSearch from '../components/GalleryImageSearch/GalleryImageSearch';

import NavBar from '../components/NavBar';

const Home:FC<PropTypes.IHomeProps> = () => {
  return (
    <div className='layout'>
      <NavBar/>
      <div className='layout__page'>
        <h1 className='homepage__title'>PokeML</h1>
        <h2 className='homepage__title'>Pokemon Machine Learning<br/> Image Repository</h2>

        <GalleryImageSearch
        
        />

        <div className='homepage__section'>
          <h3>What is PokeML?</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
