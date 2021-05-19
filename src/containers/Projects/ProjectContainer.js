import React from 'react';
import './ProjectComponent.scss';
import Budget from './Individual-Projects/Budget';
import Hangry from './Individual-Projects/Hangry';
import DreamLink from './Individual-Projects/DreamLink';
import Rps from './Individual-Projects/Rps';

const ProjectContainer = () => {
  return (
    <div className='ProjectContainer'>
      <Budget/>
      <DreamLink/>
      <Hangry/>
      <Rps/>
    </div>
  );
};

export default ProjectContainer;