import React, { FC, useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQuery } from '@apollo/react-hooks';
import { GET_CSV } from './graphql/queries';
import router, { ROUTE_TITLE } from './router';

import Home from './pages/Home';

import './scss/index.scss';

const App:FC<PropTypes.IAppProps> = ({ client, route }: any) => {
  const { data, loading } = useQuery(GET_CSV);

  if (loading) {
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

  switch (route.name) {
    case ROUTE_TITLE.HOME: {
      return (
        <Home
          images={data.images}
        />
      );
    }
    default:
      throw new Error('le application is not working, sorry buddy.');
  }
}

export default App;