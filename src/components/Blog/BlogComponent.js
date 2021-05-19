import React from 'react';
import BlogContainer from '../../containers/Blog/BlogContainer';
import './BlogComponent.scss';

const BlogComponent = () => {
  return (
    <div className='blog'>
      <p className='blog-title'>Hello, world.</p>
      <p className='blog-description'>A day in the life.</p>
      <BlogContainer/>
    </div>
  );
};

export default BlogComponent;