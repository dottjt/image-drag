import React, { FC, useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQuery } from '@apollo/react-hooks';
import { GET_ANNOTATION, GET_GALLERY } from './graphql/queries';
import router, { ROUTE_TITLE } from './router';

import Annotation from './pages/Annotation';
import Gallery from './pages/Gallery';

import './scss/index.scss';

const App:FC<PropTypes.IAppProps> = ({ client, route }: any) => {


  switch (route.name) {
    case ROUTE_TITLE.HOME: {
      const { data, loading } = useQuery(GET_ANNOTATION);

      if (loading) return <Loading loading={loading}/>

      return (
        <Annotation
          images={data.images}
        />
      );
    }
    case ROUTE_TITLE.GALLERY: {
      const { data, loading } = useQuery(GET_GALLERY);

      if (loading) return <Loading loading={loading}/>

      return (
        <Gallery
        />
      );
    }
    default:
      throw new Error('le application is not working, sorry buddy.');
  }
}

const Loading = ({ loading }: any) => {
  return (
    <div className='layout'>
      <PulseLoader
        sizeUnit={"px"}
        size={30}
        color={'#5b00a7'}
        loading
      />
    </div>
  );
}


export default App;
