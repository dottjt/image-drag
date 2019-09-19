import React, { FC } from 'react';

import ImageAnnotator from '../components/ImageAnnotator/ImageAnnotator';

const PayslipList:FC<PropTypes.IHomeProps> = ({ images }) => (
  <div className='layout'>
    <ImageAnnotator
      images={images}
    />
  </div>
);

export default PayslipList;
