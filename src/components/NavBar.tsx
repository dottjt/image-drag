import React, { FC, useState } from 'react';
import { Link } from 'react-router5';

import { ROUTE_TITLE } from '../router';

const NavBar:FC<PropTypes.INavBarProps> = () => {
  // const { data, loading } = useQuery(GET_NEW_IMAGE);

  return (
    <div className='layout__navbar'>
      <div className='navbar__logo'>
        <img src="/" alt=""/>
      </div>

      <div className='navbar__links'>
        <Link routeName={ROUTE_TITLE.HOME} /* routeOptions={{reload: true}} */>Home</Link>
        <Link routeName={ROUTE_TITLE.IMAGE_ANNOTATOR} /* routeOptions={{reload: true}} */>Annotate</Link>
        <Link routeName={ROUTE_TITLE.IMAGE_ANNOTATOR_GALLERY} /* routeOptions={{reload: true}} */>Download</Link>
        <Link routeName={ROUTE_TITLE.ABOUT} /* routeOptions={{reload: true}} */>About</Link>
      </div>

      <div className='navbar__login'>

      </div>
    </div>
  )
};

export default NavBar;
