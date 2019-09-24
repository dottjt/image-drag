import React, { FC, useState } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { GET_NEW_IMAGE } from '../graphql/queries';

const Home:FC<PropTypes.IHomeProps> = () => {
  // const { data, loading } = useQuery(GET_NEW_IMAGE);

  return (
    <div className='layout'>
      <h1>Home</h1>
    </div>
  )
};

export default Home;
