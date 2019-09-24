import React, { FC, useState } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { GET_NEW_IMAGE } from '../graphql/queries';

const About:FC<PropTypes.IAboutProps> = () => {
  // const { data, loading } = useQuery(GET_NEW_IMAGE);

  return (
    <div className='layout'>
      <h1>About</h1>
    </div>
  )
};

export default About;
