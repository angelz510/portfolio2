import React from 'react';
import './ProjectComponent.scss';
import Budget from './Individual-Projects/Budget';
import Hangry from './Individual-Projects/Hangry';
import DreamLink from './Individual-Projects/DreamLink';
import Rps from './Individual-Projects/Rps';
import Portfolio from './Individual-Projects/Portfolio';

const ProjectContainer = () => {
  return (
    <div className='project-container'>
      <h1>Projects</h1>
      <Budget/>
      <Portfolio/>
      <DreamLink/>
      <Hangry/>
      <Rps/>
    </div>
  );
};

export default ProjectContainer;