import React, { FC } from 'react';

import { Link } from 'react-router5';
import { ROUTE_TITLE } from '../router';

import { Surface, Group, Image, Layer } from 'react-canvas';

import { getMousePos } from '../util/annotateImageDatabase';

const Payslip:FC<PropTypes.IImageAnnotatorProps> = ({ images }) => {

  const image = images[0];

  return (
    <div className='image__annotator'>
      <Surface width={window.innerWidth} height={window.innerHeight} left={0} top={0}>
        <Group>
          <Image
            src={image.url}
            onTouchStart={(event: MouseEvent) => {
              const pos = getMousePos(this, event)
              console.log(pos);
            }}
          />
        </Group>
        <Layer/>
      </Surface>
    </div>
  );
}



export default Payslip;
