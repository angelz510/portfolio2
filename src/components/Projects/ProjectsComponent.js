import React from 'react';
import ProjectContainer from '../../containers/Projects/ProjectContainer'
import './ProjectsComponent.scss';

const ProjectsComponent = () => {
  return (
    <div className='projects'>
      <p className='projects-title'>Behold, my stuff.</p>
      <p className='projects-description'>Trip down memory lane highlighting knowledge and growth.</p>
      <ProjectContainer/>
    </div>
  );
};

export default ProjectsComponent;