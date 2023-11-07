import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Navegar () {
    return (
        <div>
            <Image src="/src/assets/imagenes/textobienvenida3.png" fluid width={1500} height={10} />;
            <Navbar bg="dark" variant="dark" data-bs-theme="dark" expand="xl">
                <Container>
                <Navbar.Brand href="About">Acerca de Nosotros</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" fill>
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="contact">Contactos</Nav.Link>
            <NavDropdown title="Revervar Habitacion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Simple</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Matrimonial
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Familiar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Acceder
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>

        

    );
}

export default Navegar;