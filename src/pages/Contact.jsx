import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Img360 } from '../Componentes/Imagen360';


const Contact = () => {
    return (
      <Container>
      <Row>
      <Col>
      <div className="title">
      <h2>SUGERENCIAS O RECLAMOS</h2></div>
      </Col>
      </Row>

      <Row>
      <Col>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="email" placeholder="nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="email" placeholder="correo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows="3" placeholder="Mensaje" />
      </Form.Group>
      </Form>
      </Col>
      </Row>

      <Row>
        <Col><Button variant="primary">Primary</Button>{' '}</Col>
        
      </Row>
    </Container>
    );
}

export default Contact;