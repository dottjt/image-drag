import React, { FC, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

import { Link } from 'react-router5';
import { ROUTE_TITLE } from '../router';


// import { getMousePos } from '../util/annotateImageDatabase';

const LoadedImage = () => {
  return ;
};

const ImageAnnotator:FC<PropTypes.IImageAnnotatorProps> = ({ images }) => {


  useEffect(() => {
    const [image] = useImage('https://konvajs.org/assets/lion.png');
  }

  return (
    <div className='image__annotator'>
      <Stage width={window.innerWidth} height={window.innerHeight} left={0} top={0}>
        <Layer>
          <Image
            image={image}
            onDragStart={(event: MouseEvent) => {

              // const pos = getMousePos(this, event)
              // console.log(pos);
            }}
            onDragEnd={(event: MouseEvent) => {

            }}
          />
        </Layer>
      </Stage>
    </div>
  );
}



export default ImageAnnotator;
