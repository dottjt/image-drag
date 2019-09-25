import React, { FC, useState } from 'react';
import { Link } from 'react-router5';

import { ROUTE_TITLE } from '../../router';

const ImageAnnotatorLogin:FC<PropTypes.IImageAnnotatorLoginProps> = () => {
  return (
    <div className='image__annotator'>
      <div className='image__annotator__login'>
        <h2>You must be logged in to annotate cute Pokemon!</h2>
        <div className='login__box'>
          <a href="http://localhost:5001/auth/google">Google Sign In</a>
          <a href="http://localhost:5001/auth/discord">Discord Sign In</a>
        </div>

        <Link routeName={ROUTE_TITLE.HOME}>Home</Link>
      </div>
    </div>
  )
};

export default ImageAnnotatorLogin;
