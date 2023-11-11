import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import puertaanimado from '/src/assets/imagenes/puertaanimado.gif';

const Simple = () => {
    return (
        <Container>
        <Row>
          <Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 3</Card.Title>
        <Card.Text>
          Cama Simples y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col>

          <Col><Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 4</Card.Title>
        <Card.Text>
          Cama Simple y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col></Col>

          <Col><Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 6</Card.Title>
        <Card.Text>
          Camas Simple y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col></Col>
        </Row>

        <Row>
          <Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 7</Card.Title>
        <Card.Text>
          Cama Simple y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col>

          <Col><Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 8</Card.Title>
        <Card.Text>
          Cama Simple y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col></Col>

          <Col><Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 9</Card.Title>
        <Card.Text>
          Cama Simple y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col></Col>
        </Row>
        
        <Row>
          <Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 13</Card.Title>
        <Card.Text>
          Cama Simple y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col>

          <Col><Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 14</Card.Title>
        <Card.Text>
          Cama Simple y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col></Col>

          <Col><Col><Card style={{ width: '23rem' }} border="primary">
      <Card.Img variant="top" src={puertaanimado} />
      <Card.Body>
        <Card.Title>Pieza Nº 15</Card.Title>
        <Card.Text>
          Cama Simple, TeleCable y Wifi Gratis
        </Card.Text>
        <Button variant="primary">Reservar Habitacion</Button>
      </Card.Body>
    </Card></Col></Col>
        </Row>

      </Container>
    )
}

export default Simple;