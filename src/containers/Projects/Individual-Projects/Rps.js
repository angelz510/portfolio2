import React from 'react';
import rps from '../../../assets/project-shots/rps.png';
import '../ProjectComponent.scss';

const Rps = () => {
  return (
    <div className='project'>

      <div className='project-photo'>
        <img src={rps} alt='rock paper scissors screen shot'/>
      </div>

      <div className='project-info'>
        <p className='project-name'>Rock, Paper, Scissors</p>
        <p className='project-techs'>Tools: JS, HTML, CSS</p>
        <p className='project-description'>Fun 'rock, paper, scissors game for class. 
          <br/>Classic game where user plays against the computer.
          <br/>Click Here to play!
        </p>
        <a href='https://pages.git.generalassemb.ly/angelz510/Project-0-Rock-Paper-Scissors/' target='_blank' rel='noreferrer'>
          <button className='source-code'>Check it out!</button>
        </a>
      </div>
      <hr className='project-hr'></hr>
    </div>
  );
};

export default Rps;