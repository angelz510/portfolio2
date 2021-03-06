import React from 'react';
import dreamlink from '../../../assets/project-shots/dreamlink.png';
import '../ProjectComponent.scss';

const DreamLink = () => {
  return (
    <div className='project'>

      <div className='project-photo'>
        <img src={dreamlink} alt='dreamlink'/>
      </div>

      <div className='project-info'>
        <p className='project-name'>DreamLink</p>
        <p className='project-techs'>Tools: MERN, RestAPI, JS</p>
        <p className='project-description'>Beta project for work/school.  
          <br/>DreamLink allows students to organize scholarships.
          <br/>Users can add, save, and remove scholarships from their list.
          <br/>App was made for DACA students in hopes to connect them to private scholarships.
        </p>
        <a href='https://git.generalassemb.ly/angelz510/dreamlink-frontend' target='_blank' rel='noreferrer'>
          <button className='source-code'>Source Code</button>
        </a>
      </div>
      <hr className='project-hr'></hr>
    </div>
  );
};

export default DreamLink;