import './ItemList.css';
import { CardGroup, Card, Button } from 'react-bootstrap';

function ItemListContainer() {
    return (
        <CardGroup>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="#parlante1" alt="imagen del producto" />
  <Card.Body>
    <Card.Title>Parlante 1</Card.Title>
    <Card.Text>
      Descripción del producto
    </Card.Text>
    <Button variant="primary">Aca va a ir el contador</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="#parlante2" alt="imagen del producto" />
  <Card.Body>
    <Card.Title>Parlante 2</Card.Title>
    <Card.Text>
      Descripción del producto
    </Card.Text>
    <Button variant="primary">Aca va a ir el contador</Button>
  </Card.Body>
</Card> 

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="#parlante2" alt="imagen del producto" />
  <Card.Body>
    <Card.Title>Parlante 2</Card.Title>
    <Card.Text>
      Descripción del producto
    </Card.Text>
    <Button variant="primary">Aca va a ir el contador</Button>
  </Card.Body>
</Card> 
</CardGroup>
    );
}

export default ItemListContainer;