import React from 'react';
import './Skills.scss';
import {skills} from './Skills-data';

const Skills = () => {
  return (
    <div className='skills-container'>
      <h1>Skills</h1>

          {/* Frontend */}
            <div className='card-title'>Frontend</div>
            <hr />
              <div className='about-skills'>
                {skills.frontend.map((skill, index) => (
                  <span className="about-skill-name" key={`${skill.skillName}${index}`}>
                    <a className="skill-name" href={skill.link} target="_blank" >
                      <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style"></img> 
                      <div>{skill.skillName}</div>
                    </a>
                  </span>
                ))}
              </div>

          {/* Backend */}
          <div className='card-title'>Backend</div>
          <hr />
            <div className='about-skills'>
              {skills.backend.map((skill, index) => (
                <span className="about-skill-name" key={`${skill.skillName}${index}`}>
                  <a className="skill-name" href={skill.link} target="_blank" >
                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style"></img> 
                    <div>{skill.skillName}</div>
                  </a>
                </span>
              ))}
            </div>

          {/* Programming Languages */}
          <div className='card-title'>Programming Languages</div>
          <hr />
            <div className='about-skills'>
              {skills.programmingLanguages.map((skill, index) => (
                <span className="about-skill-name" key={`${skill.skillName}${index}`}>
                  <a className="skill-name" href={skill.link} target="_blank" >
                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style"></img> 
                    <div>{skill.skillName}</div>
                  </a>
                </span>
              ))}
            </div>

          {/* Hosting Platforms */}
          <div className='card-title'>Hosting Platforms</div>
          <hr />
            <div className='about-skills'>
              {skills.hostingPlatforms.map((skill, index) => (
                <span className="about-skill-name" key={`${skill.skillName}${index}`}>
                  <a className="skill-name" href={skill.link} target="_blank" >
                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style"></img> 
                    <div>{skill.skillName}</div>
                  </a>
                </span>
              ))}
            </div>

          {/* Databases */}
          <div className='card-title'>Databases</div>
          <hr />
            <div className='about-skills'>
              {skills.databases.map((skill, index) => (
                <span className="about-skill-name" key={`${skill.skillName}${index}`}>
                  <a className="skill-name" href={skill.link} target="_blank" >
                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style"></img> 
                    <div>{skill.skillName}</div>
                  </a>
                </span>
              ))}
            </div>

          {/* Version Control */}
          <div className='card-title'>Version Control</div>
          <hr />
            <div className='about-skills'>
              {skills.versionControl.map((skill, index) => (
                <span className="about-skill-name" key={`${skill.skillName}${index}`}>
                  <a className="skill-name" href={skill.link} target="_blank" >
                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style"></img> 
                    <div>{skill.skillName}</div>
                  </a>
                </span>
              ))}
            </div>
    </div>
  )
};

export default Skills;