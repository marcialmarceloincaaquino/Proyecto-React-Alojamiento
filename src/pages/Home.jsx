import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Model } from '../Componentes/Cubo';
import { Model1 } from '../Componentes/Cubo1';
import { Model2 } from '../Componentes/Cubo2';
//import "https://aframe.io/releases/1.4.0/aframe.min.js";


const Home = () => {
            return (
                 
      <Container>
         
      
      <Row>
        <Col><Card border="primary" style={{ width: '22rem' }}>
      <Card.Header as="h5">CATAVI</Card.Header>
        <Card.Title>****************</Card.Title>
    </Card><Model /></Col>

        <Col><Card border="primary" style={{ width: '22rem' }}>
      <Card.Header as="h5">SIGLO XX</Card.Header>
        <Card.Title>****************</Card.Title>
    </Card><Model1 /></Col>

        <Col><Card border="primary" style={{ width: '22rem' }}>
      <Card.Header as="h5">UNCIA</Card.Header>
        <Card.Title>****************</Card.Title></Card><Model2 /></Col>
      </Row>

      <Row>
          <Col>uno</Col><Col>  
          
          </Col><Col>TRES</Col>
      </Row>
    </Container>

    
                
        
            );
}

export default Home;