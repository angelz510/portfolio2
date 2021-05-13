import React from 'react';
import dreamlink from '../../../assets/project-shots/dreamlink.png';
import '../../../containers/Projects/Projects.scss';

const DreamLink = () => {
  return (
    <div className='project'>

      <div className='project-photo'>
        <img src={dreamlink} alt='dreamlink'/>
      </div>

      <div className='project-info'>
        <p className='project-name'>DreamLink</p>
        <p className='project-techs'>MERN, RestAPI, JS</p>
        <p className='project-description'>Beta project for work/school.  
          <br/>DreamLink allows students to organize scholarships.
          <br/>Users can add, save, and remove scholarships from their list.
          <br/>App was made for DACA students in hopes to connect them to private scholarships.
        </p>
      </div>
      
    </div>
  );
};

export default DreamLink;