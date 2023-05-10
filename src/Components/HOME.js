import React from 'react';
import ICON1 from './../RESOURCES/icon1.png';
import ICON2 from './../RESOURCES/icon2.png';
import ICON4 from './../RESOURCES/icon3.png';
import ICON5 from './../RESOURCES/icon5.png';
import ICON from './../RESOURCES/pexels.jpeg';
import ICON3 from './../RESOURCES/pexels3.jpeg';

let HOME = (props) => {
    return(
        <div className='homepag'>
            {
               
               <div className='rows'>
                <div className='profile'>
                <img
    height= "210rem" 
    alt=""
    overflow="inherit"
    
  
    src={ICON3}
  />
                  <h1>Eric Koome</h1> 
                  <div className='sociallinks'>
                  <a href="https://www.linkedin.com/in/eric-koome-3a655b1b7" target="_blank"><img
    height= "30rem" 
    alt=""
    overflow="inherit"
    src={ICON1}
  /></a>
                  <a href="erickoome2017@gmail.com"><img
    height= "30rem" 
    alt=""
    overflow="inherit"
    src={ICON4}
  /></a>         
                  </div>
                  <div className='contact'> 
                
           <a href="erickoome2017@gmail.com"><img
    height= "20rem" 
    alt=""
    overflow="inherit"
    src={ICON2}
  />  <img
  height= "20rem" 
  alt=""
  pointer-events="none" 
  overflow="inherit"
  src={ICON5}
/><h6>+254797137565</h6></a>
                  </div>
                 
                  
                  </div>

                
                <div className='homepage' overflow="inherit">
  
                <h2>SOFTWARE DEVELOPER</h2>
                <p>
               Am Eric , a Front-end developer proficient in design and developing of user interfaces and web applications using tools and
               technologies such as React JS, JavaScript, HTML, and CSS, among other frontend technologies.
              
               .</p>
               
               <img className='img2'
    
    alt=""
    overflow="inherit"
    
  
    src={ICON}
  />
  

</div>
              
       
              </div>
            }
        </div>
    );
}
export default HOME; 