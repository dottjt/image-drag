import React, { FC, useState } from 'react';
import { Link } from 'react-router5';

import { ROUTE_TITLE } from '../router';

const NavBar:FC<PropTypes.INavBarProps> = () => {
  // const { data, loading } = useQuery(GET_NEW_IMAGE);

  return (
    <div className='layout__navbar'>
      <Link routeName={ROUTE_TITLE.HOME} /* routeOptions={{reload: true}} */>Home</Link>
      <Link routeName={ROUTE_TITLE.IMAGE_ANNOTATOR} /* routeOptions={{reload: true}} */>Annotate</Link>
      <Link routeName={ROUTE_TITLE.IMAGE_ANNOTATOR_GALLERY} /* routeOptions={{reload: true}} */>Image Set</Link>
      <Link routeName={ROUTE_TITLE.ABOUT} /* routeOptions={{reload: true}} */>About</Link>
    </div>
  )
};

export default NavBar;
