import React from 'react';
import portfolio1 from '../../../assets/project-shots/portfolio1.png';
import '../ProjectComponent.scss';

const Portfolio = () => {
  return (
    <div className='project'>

      <div className='project-photo'>
        <img src={portfolio1} alt='portfolio'/>
      </div>

      <div className='project-info'>
        <p className='project-name'>Portfolio</p>
        <p className='project-techs'>Tools: React, Bootstrap, styled-components.</p>
        <p className='project-description'>First sample portfolio built using React. 
          <br/>Explored and practiced different packages; react-reveal, parallax, and Bootstrap.
        </p>
      </div>
      <hr className='project-hr'></hr>
    </div>
  );
};

export default Portfolio;