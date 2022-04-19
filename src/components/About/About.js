import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <p className="about-title">Knowledge Driven.</p>
      <p className="about-name">I'm Angel Rodriguez.</p>
      <p className="about-description">
        <p>
          Originally from Mexico 🇲🇽 and raised in the Bay Area. Enjoy building
          applications while learning new skills.
        </p>
        <br />
        Curious how technologies work and how they can create an impact in
        community.
        <p>
          Focus on creating thoughtful, functional, and intuitive applications.
        </p>
        <br />
        <br />
        In the past, I've built applications using Node.js, React (and Redux),
        Django, MERN, Express.
        <p>
          Before development I worked in community, career coaching
          system-involved youth in San Francisco.
        </p>
        <br />
        When I'm not coding I'm exploring Hyrule or home spraying my plants.
      </p>
    </div>
  );
};

export default About;
