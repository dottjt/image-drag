import React, { FC } from 'react';
import { PulseLoader } from 'react-spinners';

const Loading = ({ loading }: any) => {
  return (
    <div className='layout'>
      <PulseLoader
        sizeUnit={"px"}
        size={30}
        color={'#5b00a7'}
        loading
      />
    </div>
  );
}

export default Loading;
