import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <p className='contact-title' >Let's Connect.</p>
      <div className='socials-container'>
        <div>
          <a href="https://www.linkedin.com/in/arodriguezz/" target="_blank" rel="noopener noreferrer">
            <button className="social">
              LinkedIn
            </button>
          </a>
        </div>
        <div>
          <a href="https://github.com/angelz510" target="_blank" rel="noopener noreferrer">
            <button className="social">
              GitHub
            </button>
          </a>
        </div>
      </div>

      <form action="https://formsubmit.co/angelzrod4@gmail.com" method="POST" target="_blank">

        <div className='form-label'>
          <label>Name:</label>
          <input className='form-input' name="name" type="text" placeholder="Enter your name" required/>
        </div>

        <div className='form-label'>
          <label>Email Address:</label>
          <input className='form-input' name="email" type="email" placeholder="Enter your email address" maxlength="256" required/>
        </div>

        <div className='form-label'>
          <label>Message:</label>
          <input className='form-input' name="message" placeholder="Enter your message" maxlength="5000" required/>
        </div>

        <input className='form-submit' type="submit" value="Submit"/>

      </form>
    </div>
  );
};

export default Contact;