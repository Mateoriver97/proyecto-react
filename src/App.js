import logo from './logo.svg';
import './App.css';
import BarraNav from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Container, Row } from 'react-bootstrap';


function App() {
  return (
    <div>
      <BarraNav />
      <ItemListContainer />
    </div>
  );
}

export default App;
