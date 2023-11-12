import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mayorrdomo from '/src/assets/imagenes/mayordomo.gif';
import alojamientooanimado from '/src/assets/imagenes/alojamientoAnimado.gif';
import museoopatiño from '/src/assets/imagenes/museopatiño.png';
import teatrosD from '/src/assets/imagenes/teatro.png';



const Abauts = () => {
    return (
          <Container>
            <Row><Col><img src={mayorrdomo} alt="" /></Col>
            <Col>
                <img src={alojamientooanimado} alt="" width={200}/>
            </Col>
            
            
            
            
            <Col><Card border="primary" style={{ width: '76rem' }}>
          <Card.Header as="h5">RESEÑA HISTORICA</Card.Header>
          <Card.Body>
            <Card.Title>******************************************************************************************</Card.Title>
            <Card.Text>
            <p style={{textAlign: 'justify',color:'#1B3D6C', margin: 50, padding:0.2}}>El Alojamiento “Los Andes”, inicio sus actividades el el 14 de Agosto de 2005,
            con Numero de Nit Nº 620970018,  como “Centro de Hospedaje Privado” que ofrece un servicio
            publico a su clientela, tanto para los clientes del interior del país como del exterior.
            Su funcionamiento es las 24 horas, teniendo un servicio de habitaciones simples, dobles y
            Matrimoniales y con ducha y wifi.</p>
            </Card.Text>
            <Button variant="primary">Mas Informacion</Button>
          </Card.Body>
        </Card></Col></Row>

        <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">MUSEO DE PATIÑO - UNCIA</h5>
        <img src={museoopatiño} alt="" />
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">TEATRO SIMON I PATIÑO - CATAVI</h5>
        <img src={teatrosD} alt="" />
      </div>
    </div>
  </div>
</div>

<p className="d-inline-flex gap-1">
  <a href="/src/pages/Home.jsx" className="btn btn-primary" role="button" data-bs-toggle="button">Principal</a>
</p>




          </Container> 



        
    );
}

export default Abauts;