import React from 'react';
//import logo from './logo.svg';

import './App.css';

import {Home }from './pages/Home';
import {Rooms} from './pages/Rooms';
import {SingleRoom} from './pages/SingleRoom';
import { Activities } from './pages/Activities';
import { About } from './pages/About';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import{ Error} from './pages/Error';

import{Router,Route,Switch} from 'react-router-dom';

import Navbar from './components/Navbar';


function App() {
  return (
  <>
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home}
  />
  <Route exact path="/rooms" component
  ={Rooms}
  />
  <Route exact path="/rooms/:slug" component= {SingleRoom}
  />
   <Route exact path="/activities/" component={Activities}
  />
  <Route exact path="/about/" component={About}
  />
  <Route exact path="/facilities/" component={Facilities}
  />
  <Route exact path="/gallery/" component={Gallery}
  />

  

  <Route component={Error} />
  </Switch>
  </>
  
  );
}

export default App;
