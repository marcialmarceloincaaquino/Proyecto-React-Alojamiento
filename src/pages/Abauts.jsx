import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Abauts = () => {
    return (
        <div>
           <Card border="primary" style={{ width: '76rem' }}>
      <Card.Header as="h5">RESEÑA HISTORICA</Card.Header>
      <Card.Body>
        <Card.Title>******************************************************************************************</Card.Title>
        <Card.Text>
        El Alojamiento “Los Andes”, inicio sus actividades el el 14 de Agosto de 2005,
        con Numero de Nit Nº 620970018,  como “Centro de Hospedaje Privado” que ofrece un servicio
        publico a su clientela, tanto para los clientes del interior del país como del exterior.
        Su funcionamiento es las 24 horas, teniendo un servicio de habitaciones simples, dobles y
        Matrimoniales y con ducha y wifi.
        </Card.Text>
        <Button variant="primary">Mas Informacion</Button>
      </Card.Body>
    </Card>
                
        </div>
        
    );
}

export default Abauts;