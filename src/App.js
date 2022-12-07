import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './Components/NavBar/NavBar.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={ <ItemListContainer gretting='Bienvenidos' />} />
        <Route path='/category/:id' element={ <ItemListContainer gretting='Bienvenidos' />} />
        <Route path='/item/:id' element={ <ItemListContainer gretting='Bienvenidos' />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
