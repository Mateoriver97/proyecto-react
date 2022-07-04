import React, { useEffect, useState, useParams } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function ItemDetail({producto, descr, img}) {

  const [buttonClicked, setButtonClicked]=useState(false);

  const handleButtonClick=()=>{
    setButtonClicked(!buttonClicked);
};

    return (
      <Container fluid='md'>
        <Row className='justify-content-md-center'>
       <img variant="top"
               src={require(`../assets/${img}`)} 
               alt="Imagen del parlante 1" 
               style={{height:"8rem", width: "8rem"}} 
               className="display-block mx-auto">
        </img>
       <Button onClick={handleButtonClick} >Ver más</Button>
       {buttonClicked && ( 
         <Card className='Card'>
           <Card.Title>{producto}</Card.Title>
           <Card.Text>{descr}</Card.Text>
           {handleButtonClick}
         </Card>
       )}
       </Row>
      </Container>
    )
}

export default ItemDetail;