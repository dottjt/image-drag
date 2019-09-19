import React, { FC } from 'react';

import ImageAnnotator from '../components/ImageAnnotator/ImageAnnotator';
import RightBar from '../components/RightBar/RightBar';

const PayslipList:FC<PropTypes.IHomeProps> = ({ images }) => (
  <div className='layout'>
    <ImageAnnotator
      images={images}
    />
    <RightBar

    />
  </div>
);

export default PayslipList;
