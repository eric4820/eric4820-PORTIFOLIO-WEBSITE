import React from 'react';

import {  Link } from "react-router-dom";
import  { BrowserRouter as Router} from 'react-router-dom';
import ICON from './../RESOURCES/pexels.jpeg';
let Navbar = (props) => {
    function refreshPage(){ 
        setTimeout(function(){
            window.location.reload();
         }, 600); 
    }
    return(
        <div class="topnav" >
             <Router>
         <Link className='linkk' onClick={ refreshPage } to="/"></Link>
         <Link className='linkk' onClick={ refreshPage }to="/" >HOME</Link>
         <Link className='linkk' onClick={ refreshPage }to="/About" >ABOUT</Link>
                     
                      <Link className='linkk' onClick={ refreshPage } to="/Projects" >PROJECTS</Link>
                     
                     
                   </Router>
                
                   <a className='linkk' href="mailto:erickoome2017@gmail.com">EMAIL ME</a>
      </div>
    );
}
export default Navbar;