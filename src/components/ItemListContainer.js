import './ItemListContainer.css';
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Contador from './Contador';
import ItemList from './ItemList';

function ItemListContainer({greetings}) {
  const [productos, setProductos]=useState([])
  
  useEffect(() => {
    setTimeout(
      () => { 
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
     .then(res=>res.json())
     .then(data=>setProductos(data))
     .catch(err=>console.log(err))
  }, 2000)
}, []);

  console.log("Productos:", productos)

    return (
      <>
       <h1 className="font text-center">{greetings}</h1>
       <hr />
       <ItemList listadoDeProductos={productos} />
      </>
    )
}

export default ItemListContainer;