import React from 'react';
import plantpic from '../../../assets/blog/plantpic.JPG';
//import '../PostComponent.scss';

const Plant = () => {
  return (
    <div className='post'>

      <div className='post-photo'>
        <img src={plantpic} alt='plant'/>
      </div>

      <div className='post-info'>
        <p className='post-name'>Budget Pls</p>
        <p className='post-caption'>Budgeting App in which users can create profile; incorporated google login and authentication. 
          <br/>Users can create, search, edit, and remove expenses. 
          <br/>Tested components using jest and styled using Sass.
        </p>
      </div>
      
    </div>
  );
};

export default Plant;