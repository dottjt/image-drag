import * as React from 'react';
import NavBar from '../components/NavBar';

class Page404 extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='layout'>
        <NavBar/>
        <div className='layout__page'>
          <div className='layout__content'>
            <p>Oh no! You got a 404 page! It must be a sign from God.</p>
          </div>
        </div>
      </div>
    );
  };
};

export default Page404;
