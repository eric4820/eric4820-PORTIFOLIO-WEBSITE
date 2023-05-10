import React from 'react';
import { Button,Row,Card,CardTitle,CardBody,CardSubtitle,CardText ,CardImgOverlay,CardImg} from 'reactstrap';
import CV from './../RESOURCES/CV.pdf';

let About = (props) => {
    return(
        <div className='body-text'pad>
            {
               
               <div>
                <div>
  <Card overflow="inherit">
  
    
    
      <CardTitle tag="h5">
        About
      </CardTitle>
      <CardText>
      <p>


Am a Front-end developer proficient in developing user interfaces and web applications using tools and
technologies such as React JS, JavaScript, HTML, and CSS, among other frontend technologies.
I am familiar with the Software Development patterns, Software Development Life Cycle (SDLC), and
Agile Methodologies for Software Project management.
Conversant with organizational information infrastructure and enterprise architecture, including
hardware, software and application systems. Knowledge of relevant programming language(s) in
particular Python, JavaScript, Java and the ability to use programming skills to develop information
systems.
My goal is to work on projects to bring a real value, learn on a daily basis and be surrounded by
people valuing quality, clean code principles and testing.
.</p>
      </CardText>
      
   
  </Card>
</div>
             
               
        <div className='body-text'>
        <button className='button'><a href={CV} target="_blank">VIEW RESUME</a><br></br>
        </button>
      </div>
              </div>
            }
        </div>
    );
}
export default About; 