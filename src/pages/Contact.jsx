import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    return (
        <Container>
        <Row>
        <Col>
        <div className="title">
                      <h2>SUGERENCIAS O RECLAMOS</h2>
                  </div></Col>
      </Row>
      <Row>
        <Col><Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="correo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows="3" placeholder="Mensaje" />
      </Form.Group>
    </Form></Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col><Button variant="primary">Primary</Button>{' '}</Col>
        <Col>2 of 3</Col>
      </Row>
    </Container>
    );
}

export default Contact;