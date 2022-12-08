import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './Components/NavBar/NavBar.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={ <ItemListContainer  />} />
        <Route path='/category/:id' element={ <ItemListContainer  />} />
        <Route path='/product/:id' element={ <ItemDetailContainer  />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
