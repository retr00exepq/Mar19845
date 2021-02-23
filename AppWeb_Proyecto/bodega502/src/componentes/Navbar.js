import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import bodega from '../imagenes/bodega502.jpg';
import './Navbar.css';
import { FaSistrix } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';


//FaRegCircle
function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img src={bodega} alt='Bodega 502' className='logo'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown" className="MenuDrop" >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
        <Form inline>
          <FormControl type="text" placeholder="Buscar..." className="mr-sm-2"/>
          <Button variant="primary">
            <FaSistrix className="SearchBtn" />
          </Button>
        </Form>
        
          <FaUserAlt className="icono" />
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;