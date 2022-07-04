import React from "react";
import Contador from "./Contador";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import ItemDetailContainer from "./ItemDetailContainer";

function Item({Title, Descr, Precio, Img, Stock}) {
    return(
            <Card className="text-center" style={{ width: "18rem"}}>
              <Card.Img 
               variant="top"
               src={require(`../assets/${Img}`)} 
               alt="Imagen del parlante 1" 
               style={{height:"8rem", width: "7rem"}} 
               className="display-block mx-auto"
              />
              <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text className="font-dark">{Precio}</Card.Text>
                <Card.Text className="font-dark">Stock: {Stock} unidades</Card.Text>
                <Contador stock={Stock}/>
                <Button variant="primary">Agregar al carrito</Button>
                <hr />
                <ItemDetailContainer />
              </Card.Body>
            </Card>
    )
}

export default Item;