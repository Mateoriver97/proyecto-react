import logo from './logo.svg';
import './App.css';
import BarraNav from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList';


function App() {
  return (
    <div>
      <BarraNav />
      <ItemListContainer />
      </div>
  );
}

export default App;
