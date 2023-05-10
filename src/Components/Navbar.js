import React from 'react';

import {  Link } from "react-router-dom";
import  { BrowserRouter as Router} from 'react-router-dom';

let Navbar = (props) => {
    function refreshPage(){ 
        setTimeout(function(){
            window.location.reload();
         }, 600); 
    }
    return(
        <div class="topnav" id="myTopnav">
             <Router>
         <Link onClick={ refreshPage } to="/"></Link>
         <Link onClick={ refreshPage }to="/" >HOME</Link>
         <Link onClick={ refreshPage }to="/About" >ABOUT</Link>
         
                      <Link onClick={ refreshPage } to="/Projects" >PROJECTS</Link>
                     
                     
                   </Router>
                   <h4> +254797137565</h4>
                   <a href="mailto:erickoome2017@gmail.com">EMAIL ME</a>
      </div>
    );
}
export default Navbar;