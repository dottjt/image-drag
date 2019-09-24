import React, { FC, useState, useEffect } from 'react';
import router, { ROUTE_TITLE } from './router';

import Home from './pages/Home';
import About from './pages/About';
import ImageAnnotator from './pages/ImageAnnotator';
import ImageAnnotatorGallery from './pages/ImageAnnotatorGallery';

import './scss/index.scss';

const App:FC<PropTypes.IAppProps> = ({ client, route }: any) => {
  switch (route.name) {
    case ROUTE_TITLE.HOME: {
      return (
        <Home/>
      );
    }
    case ROUTE_TITLE.ABOUT: {
      return (
        <About/>
      );
    }
    case ROUTE_TITLE.IMAGE_ANNOTATOR: {
      return (
        <ImageAnnotator image_id=''/>
      );
    }
    case ROUTE_TITLE.IMAGE_ANNOTATOR_INDIVIDUAL: {
      return (
        <ImageAnnotator image_id={route.params.image_id}/>
      );
    }
    case ROUTE_TITLE.IMAGE_ANNOTATOR_GALLERY: {
      return (
        <ImageAnnotatorGallery/>
      );
    }
    default:
      throw new Error('le application is not working, sorry buddy.');
  }
}

export default App;
