import logo from './logo.svg';
import './App.css';
import BarraNav from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Container, Row } from 'react-bootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    /*<div>
      <BarraNav />
      <ItemListContainer greetings={"Bienvenidos a nuestra tienda online!"}/>
    </div>*/
    <div>
      <BarraNav />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
