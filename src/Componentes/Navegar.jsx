import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bienvenida from '/src/assets/imagenes/textobienvenida3.png';
import Contact from '../pages/Contact'

import Image from 'react-bootstrap/Image';

function Navegar () {
    return (
        <div>
            <Image src={bienvenida} fluid width={1500} height={10} />;

            <Navbar bg="dark" variant="dark" data-bs-theme="dark" expand="xl">
            <Container>
            <Navbar.Brand href="About">Acerca de Nosotros</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto" fill>
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="contact">Contactos</Nav.Link>
            <NavDropdown title="Revervar Habitacion" id="basic-nav-dropdown">
              <NavDropdown.Item href="Simple">Simple</NavDropdown.Item>
              <NavDropdown.Item href="Matrimonial">
                Matrimonial
              </NavDropdown.Item>
              <NavDropdown.Item href="Familiar">Familiar</NavDropdown.Item>
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