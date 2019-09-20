import React, { FC, useState, useEffect } from 'react';
import router, { ROUTE_TITLE } from './router';

import Annotation from './pages/Annotation';
import Gallery from './pages/Gallery';

import './scss/index.scss';

const App:FC<PropTypes.IAppProps> = ({ client, route }: any) => {
  switch (route.name) {
    case ROUTE_TITLE.HOME: {
      return (
        <Annotation/>
      );
    }
    case ROUTE_TITLE.GALLERY: {
      return (
        <Gallery/>
      );
    }
    default:
      throw new Error('le application is not working, sorry buddy.');
  }
}

export default App;
