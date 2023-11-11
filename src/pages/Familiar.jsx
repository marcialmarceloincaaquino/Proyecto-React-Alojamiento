import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import puertaanimado from '/src/assets/imagenes/puertaanimado.gif';

const Familiar = () => {
    return (
        <Container>
        <Row>
          <Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src= {puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 2</Card.Title>
        <Card.Text>
          Dos Camas Simples, TeleCable y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col>

          <Col><Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 19</Card.Title>
        <Card.Text>
          Tres Camas Matrimoniales, TeleCable y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col></Col>

          <Col><Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 20</Card.Title>
        <Card.Text>
          Cuatro Camas Simples, TeleCable y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col></Col>
        </Row>
      </Container>
    )
}

export default Familiar;