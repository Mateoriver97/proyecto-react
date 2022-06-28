import React from "react";
import Item from "./Item";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function ItemList({listadoDeProductos}) {
    return(
        //console.log('listadoDeProductos', listadoDeProductos)
        <Container fluid="md">
            <Row className='justify-content-md-center'>
                {listadoDeProductos.map( (unProducto) => <Item 
                Title={unProducto.Title}
                Descr={unProducto.Descr}
                Precio={unProducto.Precio}
                Stock={unProducto.Stock}
                Img={unProducto.Img}
                />
                )}
            </Row>
        </Container>
    )
}

export default ItemList;