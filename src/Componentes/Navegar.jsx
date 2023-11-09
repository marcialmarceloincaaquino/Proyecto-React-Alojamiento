import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bienvenida from '/src/assets/imagenes/textobienvenida3.png';
import { Link} from "react-router-dom";

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
            <Nav.Link href="#"><Link to="/"> Principal</Link> </Nav.Link>
            <Nav.Link href="#"> <Link to="/contact"> Contactos</Link></Nav.Link>
            <NavDropdown title="Revervar Habitacion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#"> <Link to="/simple"> Simple</Link></NavDropdown.Item>
              <NavDropdown.Item href="#"><Link to="/matrimonial"> Matrimonial</Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#"><Link to="/familiar"> Familiar</Link></NavDropdown.Item>
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