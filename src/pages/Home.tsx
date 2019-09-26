import React, { FC, useState } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { GET_NEW_IMAGE } from '../graphql/queries';

const Home:FC<PropTypes.IHomeProps> = () => {
  // const { data, loading } = useQuery(GET_NEW_IMAGE);

  const [searchText, setSearchText] = useState();

  return (
    <div className='layout'>

      <h1>PokeML</h1>
      <h2>Pokemon Machine Learning Image Repository</h2>

      <div className=''>
        <input type="text" value={/>
        <div></div>
      </div>
      

      <div className='homepage__section'>
        <h3></h3>
      </div>
    </div>
  )
};

export default Home;
