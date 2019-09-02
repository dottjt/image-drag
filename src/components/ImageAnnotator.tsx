import React, { FC } from 'react';

import { Link } from 'react-router5';
import { ROUTE_TITLE } from '../router';

import { Surface, Image, Layer } from 'react-canvas';
import Konva from 'konva';

const Payslip:FC<PropTypes.IImageAnnotatorProps> = ({ images }) => {
  const image = images[0];
  return (
    <div className='image__annotator'>
      <Surface width={window.innerWidth} height={window.innerHeight} left={0} top={0}>
        <Image
          src={image.url}
        />
        <Layer/>
      </Surface>
    </div>
  );
}


export default Payslip;
