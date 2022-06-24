import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ShopCart from './ShopCart';

function BarraNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img 
          src={require('C:/Users/Mateo/Desktop/proyecto-react-sciutto/src/assets/logo.png')}
          width="60"
          height="45"
          className="d-inline-block align-top"
          alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#ofertasDeLaSemana">Ofertas</Nav.Link>
            <Nav.Link href="#datosDeContacto">Nosotros</Nav.Link>
            <NavDropdown title="Tienda" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Parlantes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Equipos de audio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Instalaciones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ventas mayoristas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#acercaDe">Acerca de</Nav.Link>
            <ShopCart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNav;
