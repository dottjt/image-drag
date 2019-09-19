import React, { FC, useEffect, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';

const LoadedImage = () => {
  return ;
};

const AnnotationImage:FC<PropTypes.IAnnotationImageProps> = () => {

  const [annotationImage, setAnnotationImage] = useState(null);

  useEffect(() => {
    const [image] = useImage('https://konvajs.org/assets/lion.png');
  });

  return (
    <div className='image__annotator'>
      <Image
        image={annotationImage}
      />
    </div>
  );
}

export default AnnotationImage;
