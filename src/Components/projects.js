import React from 'react';
import HOTEL from './../RESOURCES/HOTEL_BOOKING.pdf';
import { Button,Row,Card,CardTitle,CardBody,CardSubtitle,CardText ,Col} from 'reactstrap';
const Projects = (props) => {
    return(
        <div className='body-text'>
            
                <h1>My Projects</h1>
                <Row >
  <Col sm="6">
    <Card body color='light'>
    <img
    height= "210rem" 
    alt=""
    overflow="inherit"
    
  
    src="https://picsum.photos/900/270?grayscale"
  />
      <CardTitle tag="h5">
        Project 1
      </CardTitle>
      <CardText>
      DATA ANALYSIS PROJECT
      </CardText>
      <Button color ='info'>
      <a href={HOTEL} target="_blank">VIEW PROJECT</a><br></br>
      </Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body color='light'>
    <img
    height= "210rem" 
    alt=""
    src="https://picsum.photos/318/180"
  />
      <CardTitle tag="h5">
        Project 2
      </CardTitle>
      <CardText>
     INVENTORY MANAGEMENT SYSTEM DEVELOPMENT PROJECT
      </CardText>
      <Button color ='info' >
      <a href="https://github.com/eric4820/INVENTORY-MANAGEMENT-SYSTEM.git" target="_blank">VIEW PROJECT</a><br></br>
      </Button>
    </Card>
  </Col>
</Row>
              
             
        </div>
    );
}
export default Projects;