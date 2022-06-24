import './ItemListContainer.css';
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Contador from './Contador';

function ItemListContainer() {
    return (
      <>
       <div><h2 className="font text-center">Nuestros productos!</h2></div>
       <Container fluid>
        <Row xs="auto" md="auto" className="p-3 bg-light rounded-3 justify-content-center">
          <Col>
            <Card className="text-center" style={{ width: "18rem"}}>
              <Card.Img 
               variant="top"
               src={require("../assets/parlante1.png")} 
               alt="Imagen del parlante 1" 
               style={{height:"8rem", width: "7rem"}} 
               className="display-block mx-auto"
              />
              <Card.Body>
                <Card.Title>Parlante 1</Card.Title>
                <Card.Text>Descripción parlante 1</Card.Text>
                <Card.Text className="font-dark">$xx.xxx</Card.Text>
                <Contador stock={10}/>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center" style={{ width: "18rem"}}>
              <Card.Img 
               variant="top" 
               src={require("../assets/parlante2.png")}  
               style={{height:"8rem", width: "7rem"}} 
               className="display-block mx-auto"
               alt="Imagen del parlante 2"
               />
              <Card.Body>
                <Card.Title>Parlante 2</Card.Title>
                <Card.Text>Descripción parlante 2</Card.Text>
                <Card.Text className="font-dark">$xx.xxx</Card.Text>
                <Contador stock={12}/>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center" style={{ width: "18rem"}}>
              <Card.Img
               variant="top"
               src={require("../assets/parlante3.png")}  
               style={{height:"8rem", width: "7rem"}} 
               className="display-block mx-auto"
               alt="Imagen del parlante 2"
              />
              <Card.Body>
                <Card.Title>Parlante 3</Card.Title>
                <Card.Text>Descripción parlante 3</Card.Text>
                <Card.Text className="font-dark">$xx.xxx</Card.Text>
                <Contador stock={8}/>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       </Container>
</>
    );
}

export default ItemListContainer;