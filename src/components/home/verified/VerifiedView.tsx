import React from 'react';
import Post from '../posts/Post';

type Props = {};

const VerifiedView = (props: Props) => {
  return <div className='flex justify-center pt-8'>
  <div className='flex flex-col w-1/2'>
      <Post verified = {true}/>
      <Post verified = {true}/>
  </div>
</div>;
};

export default VerifiedView;
