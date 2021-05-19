import React from 'react';
import './PostComponent.scss';
import Plant from './Individual-Posts/Plant';

const PostContainer = () => {
  return (
    <div className='PostContainer'>
      <Plant/>
    </div>
  );
};

export default PostContainer;