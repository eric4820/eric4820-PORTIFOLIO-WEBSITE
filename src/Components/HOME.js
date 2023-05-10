import React from 'react';
import ICON from './../RESOURCES/icon.jpg';
import { Button,Row,Card,CardTitle,CardBody,CardSubtitle,CardText ,CardImgOverlay,CardImg} from 'reactstrap';
let HOME = (props) => {
    return(
        <div className='body-text'pad>
            {
               
               <div>
                <Card color="light" overflow="inherit">
  
    
               
  <CardTitle tag="h5">
   
  </CardTitle>
  <img src={ICON}   alt=""width="200" height="200"></img>
  <CardText>
  
                <h2>SOFTWARE DEVELOPER</h2>
                
                <p>
               Am Eric , a Front-end developer proficient in design and developing of user interfaces and web applications using tools and
               technologies such as React JS, JavaScript, HTML, and CSS, among other frontend technologies.
              
               .</p>
               
  </CardText>
  

</Card>
              
       
              </div>
            }
        </div>
    );
}
export default HOME; 