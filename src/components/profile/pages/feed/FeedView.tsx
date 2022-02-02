import React from 'react';
import Post from '../../../home/posts/Post';
import Posts from '../../../home/posts/Posts';

type Props = {};

const FeedView = (props: Props) => {
  return <div>
      <Post verified={true}  />
  </div>;
};

export default FeedView;
