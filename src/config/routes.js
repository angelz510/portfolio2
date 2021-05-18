import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Blog from '../containers/Blog/Blog';
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
        <Route path='/projects' component={ Projects }/>
      </Fade>
      
      <Route path='/blog' component={ Blog }/>
      <Route path='/contact' component={ Contact }/>
    </div>
  </Switch>
);