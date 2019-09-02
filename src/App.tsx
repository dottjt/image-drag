import React, { FC, useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQuery } from '@apollo/react-hooks';
import GET_CSV from './graphql/queries';
import router, { ROUTE_TITLE } from './router';

import PayslipList from './pages/Home';

// import { } from './util';

import './scss/index.scss';

const App:FC<PropTypes.IAppProps> = ({ client, route }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const { data } = useQuery(GET_CSV);

      client.writeData({
        data: {
          images: data.images,
        },
      });
      setLoading(false);
    }
  });

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
    case ROUTE_TITLE.Home: {
      return (
        <Home
          images={data.images}
        />
      );
    }
    // case ROUTE_TITLE.PAYSLIP_SINGLE: {
    //   return (
    //     <PayslipSingle
    //       payslip={payslip}
    //     />
    //   )
    // }
    default:
      throw new Error('le application is not working, sorry buddy.');
  }
}

export default App;
