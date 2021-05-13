import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Blog from '../containers/Blog/Blog';
import Contact from '../components/Contact/Contact';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/about' component={ About }/>
    <Route path='/projects' component={ Projects }/>
    <Route path='/blog' component={ Blog }/>
    <Route path='/contact' component={ Contact }/>
  </Switch>
);