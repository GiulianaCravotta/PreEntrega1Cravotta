import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrousel2 from './img/Carrousel 2.png';
import Carrousel1 from './img/Carrousel 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer showGreetings={true} greeting={Carrousel1} greeting1={Carrousel2} />} />
          <Route path='/category/:id' element={<ItemListContainer showGreetings={false}/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
