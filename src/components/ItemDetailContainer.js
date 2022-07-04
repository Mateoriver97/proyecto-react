import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import ItemDetail from './ItemDetail';

function ItemDetailContainer(){
    
    const [info, setInfo]= useState([])

    useEffect( ()=>{
        setTimeout( ()=>{
            fetch('data.json', {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              })
            .then((resp)=>resp.json())
            .then((data)=>setInfo(data))
        }, 2000)
    }, [])

    return(
        <Container fluid='md'>
            <Row className='justify-content-md-center'>
             {info && info.map(i => <ItemDetail producto={i.Title} descr={i.Descr} img={i.Img}/>)}
            </Row>
        </Container>
    );
}

export default ItemDetailContainer;