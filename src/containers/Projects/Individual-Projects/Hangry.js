import React from 'react';
import hangryimg from '../../../assets/project-shots/hangryimg.png';
import '../ProjectComponent.scss';

const Hangry = () => {
  return (
    <div className='project'>

      <div className='project-photo'>
        <img src={hangryimg} alt='hangryapp'/>
      </div>

      <div className='project-info'>
        <p className='project-name'>Hangry</p>
        <p className='project-techs'>Tools: Node.js, MongoDB, MVC, RestAPI, Bootstrap.</p>
        <p className='project-description'>Fun beta project that returns nearest food options depending on hunger level input. 
          <br/>Users can create a profile and search restaurants near school (General Assembly).
          <br/>Level 1/2 returns deliveries, 3/4 deliveries + walking distance, 5 walking distance.
        </p>
      </div>
      
    </div>
  );
};

export default Hangry;