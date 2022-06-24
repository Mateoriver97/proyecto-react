import { useState } from "react";
import { Container, Row, Button } from 'react-bootstrap';

function Contador({stock}){
    const [num, setNum] = useState(0);

    const suma = () => {
        if (num<=(stock-1)) { 
         setNum(num+1)
        }
    }

    const resta = () => {
        if (num>0) { 
         setNum(num-1)
        }
    }

    return (
        <>
         <Container fluid>
            <Row xs="auto" md="auto" className="p-3 bg-light rounded-3 justify-content-center">
             <Button onClick={resta} className="btn btn-danger">-</Button>
             <p>{num}</p>
             <Button onClick={suma} className="btn btn-success">+</Button>
            </Row>
         </Container>
        </>
    )
}

export default Contador; 