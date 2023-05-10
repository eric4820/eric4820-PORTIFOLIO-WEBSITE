
import React, { Component} from 'react';
import { useState } from 'react';
import  { Link,BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Projects from '../Components/projects.js';
import About from '../Components/About.js';
import Cv from '../Components/Cv.js';
import HOME from '../Components/HOME.js';
let Body = (props) => {
    return(
        <div className='body'>
            
           <Router>
                     
                     <Switch>
                       <Route exact path="/Projects" component={Projects}/>
                       <Route exact path="/Cv" component={Cv}/>
                       <Route exact path="/About" component={About}/>
                       <Route exact path="/" component={HOME}/>
                     
                       <Route exact path="/About" component={About}/>
                     </Switch>
                   </Router>
        </div>
    );
}
export default Body;