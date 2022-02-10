import React from 'react';
import Post from '../../../home/posts/Post';

type Props = {};

const FeedView = (props: Props) => {
  return <div className='p-8'>
      <Post verified={true}  />
  </div>;
};

export default FeedView;
