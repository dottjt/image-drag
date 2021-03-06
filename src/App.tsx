import React, { FC, useState, useEffect } from 'react';
import router, { ROUTE_TITLE } from './router';

import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENT_USER } from './graphql/queries';

import Home from './pages/Home';
import About from './pages/About';
import ImageAnnotator from './pages/ImageAnnotator';
import Gallery from './pages/Gallery';

import Loading from './components/Loading';

import './scss/index.scss';

const App:FC<PropTypes.IAppProps> = ({ client, route }: any) => {

  const { data, loading } = useQuery(GET_CURRENT_USER);

  if (loading) return <Loading loading={loading}/>;

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
        <Gallery/>
      );
    }
    default:
      throw new Error('le application is not working, sorry buddy.');
  }
}

export default App;
