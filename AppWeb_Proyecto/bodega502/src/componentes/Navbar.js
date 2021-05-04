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
import React, { Component } from "react";
import { Link } from "react-router-dom";

//FaRegCircle
function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand >
        <Link to='/'>
          <img src={bodega} alt='Bodega 502' className='logo'></img>
        </Link>
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown" className="MenuDrop" >
            <NavDropdown.Item >
              <Link to='/oferta'>
                Ofertas
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to='/editor'>
                Editor
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to='/producto'>
                producto
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
          <Button variant="primary">
            <FaSistrix className="SearchBtn" />
          </Button>
        </Form>



      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;