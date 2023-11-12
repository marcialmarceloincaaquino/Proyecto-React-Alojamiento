import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Img360 } from '../Componentes/Imagen360';
import Iframe from 'react-iframe';
import direcion from '/src/assets/imagenes/logodireccion.png';
import logotelefono from '/src/assets/imagenes/telefonologo.png';
import logoubicacion from '/src/assets/imagenes/telefonologo.png';



const Contact = () => {
    return (
      
      <Container>
    <div className="card-group">
  <div className="card">
    <img src={direcion} className="card-img-top" alt="..."/>
    <div className="card-body">
     
      <p className="card-text">Calle Sucre Nº 25 entre Ayacucho, detras de la Iglesia</p>
      <p className="card-text"><small className="text-body-secondary">****************************************</small></p>
    </div>
  </div>

  <div className="card">
    <img src={logotelefono} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">TELEFONOS DE REFERENCIA</h5>
      <p className="card-text">Cel: 68280327 - 74103806 - incaaquinolosandes@gmail.com</p>
      <p className="card-text"><small className="text-body-secondary">******************************************</small></p>
    </div>
  </div>
</div>
<div className="card-group">
  <div className="card" >
    <img src={logoubicacion} className="card-img-top img-fluid  max-width: 100% height: 10" />
    <div className="card-body">
      <hr />
      <h5 className="card-title">UBICACION ACTUAL</h5>
      <p className="card-text"><div id="map-container-google-2" className="z-depth-1-half map-container">
      <Iframe width="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.58241635599123!2d-66.58529596785382!3d-18.423835166509388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fce0764be0addd%3A0xd50f59b757033949!2sLOS%20ANDES%20Alojamiento!5e0!3m2!1ses-419!2sbo!4v1699630941708!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
</div></p>
      <p className="card-text"><small className="text-body-secondary">ULTIMA ACTULIZACION NOVIEMBRE 2024</small></p>
    </div>
  </div>
</div>

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
        <Col><Button variant="primary">Enviar</Button>{' '}</Col> <Col><Img360 /></Col>
      </Row>

    </Container>
    );
}

export default Contact;