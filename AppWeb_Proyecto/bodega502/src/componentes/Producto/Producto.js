/* eslint-disable no-unused-vars */
import './Producto.css';
import sillon from './sillonPrueba.jpg';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from './Carrousel';

export default function Producto(){
    return(    
        <Container fluid>
            <Row >
                <Col xs={1} sm={1} md={1} lg={1} className="Ang">
                    <img src={sillon} alt="Sillon"></img>
                    <img src={sillon} alt="Sillon"></img>
                    <img src={sillon} alt="Sillon"></img>
                    <img src={sillon} alt="Sillon"></img>
                </Col>

                <Col xs={5} sm={5} md={5} lg={5} className="Ima">
                    <Carousel></Carousel>
                </Col>

                <Col xs={6} sm={6} md={6} lg={6} className="Des">
                    <p>Nombre:<br></br>
                    Precio:<br></br>
                    <details>
                        <summary>Descripción</summary><br></br>
                    </details>
                    <details>
                        <summary>Detalles tecnicos</summary><br></br>
                    </details>
                    </p>
                </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12}>
                <Col xs={12} sm={12} md={12} lg={12} className="Rec">recomendaciones</Col>
            </Row>
        </Container>
    );
}

