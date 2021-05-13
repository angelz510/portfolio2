import React from 'react';
import '../Projects/Projects.scss';
import Budget from '../../components/Projects/Individual-Projects/Budget';
import Hangry from '../../components/Projects/Individual-Projects/Hangry';
import DreamLink from '../../components/Projects/Individual-Projects/DreamLink';
import Rps from '../../components/Projects/Individual-Projects/Rps';

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