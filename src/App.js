import './App.css';
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrousel2 from './img/Carrousel 2.png';
import Carrousel1 from './img/Carrousel 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={Carrousel1} greeting1={Carrousel2} />
    </div>
  );
}

export default App;
