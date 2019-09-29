import React, { FC, useEffect, useState } from 'react';

const GalleryImage:FC<PropTypes.IGalleryImageProps> = ({
  image,
}) => {
  console.log(image)
  return (
    <div className='gallery__search__result'>
      {image.annotations.map((annotation: Util.Annotation) => (
        <span
          key={annotation.id}
          style={{
            position: 'absolute',
            width: 0, // TODO
            height: 0, // TODO
            top: annotation.coordinates[0].y, // TODO
            left: annotation.coordinates[0].x, // TODO
          }}
        >
          Annotation 1
        </span>
      ))}
    </div>
  )
}

export default GalleryImage;
