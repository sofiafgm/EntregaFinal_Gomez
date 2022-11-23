import logo from './logo.svg';
import './assets/NavBar.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer gretting='Bienvenidos' />
      </header>
    </div>
  );
}

export default App;
