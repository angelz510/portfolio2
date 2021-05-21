import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import ProjectsComponent from '../components/Projects/ProjectsComponent';
import BlogComponent from '../components/Blog/BlogComponent';
import Contact from '../components/Contact/Contact';

export default (
  <Switch>
    <div>
      <Fade bottom>
        <Route exact path='/' component={ Home }/>
      </Fade>
    
      <Fade bottom>
        <Route path='/about' component={ About }/>
      </Fade>
    
      <Fade bottom>
        <Route path='/projects' component={ ProjectsComponent }/>
      </Fade>

      <Fade bottom>
        <Route path='/blog' component={ BlogComponent }/>
      </Fade>
      
      <Fade bottom>
        <Route path='/contact' component={ Contact }/>
      </Fade>
    </div>
  </Switch>
);