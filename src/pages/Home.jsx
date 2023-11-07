import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Model } from '../Componentes/Cubo';


const Home = () => {
            return (
                <div>
            <Container>
      <Row>
      
        <Col> test22<Model /></Col>

        
        <Col><Image src="/src/assets/imagenes/banner1.jpg" rounded width={500} /></Col>
        <Col><Image src="/src/assets/imagenes/banner2.jpg" rounded width={500} /></Col>
      </Row>
      <Row>
        <Col><Card border="primary" style={{ width: '22rem' }}>
      <Card.Header as="h5">CATAVI</Card.Header>
        <Card.Title>****************</Card.Title>
    </Card><Image src="/src/assets/imagenes/catavi.jpg" rounded width={300} /></Col>
        <Col><Card border="primary" style={{ width: '22rem' }}>
      <Card.Header as="h5">SIGLO XX</Card.Header>
        <Card.Title>****************</Card.Title>
    </Card><Image src="/src/assets/imagenes/siglo xx.jpg" rounded width={300} /></Col>
        <Col><Card border="primary" style={{ width: '22rem' }}>
      <Card.Header as="h5">UNCIA</Card.Header>
        <Card.Title>****************</Card.Title>
    </Card><Image src="/src/assets/imagenes/uncia.jpg" rounded width={300} /></Col>
      </Row>
    </Container>
                
        </div>
            );
}

export default Home;