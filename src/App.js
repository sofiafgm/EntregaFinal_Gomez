import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components/NavBar/NavBar.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';
import Footer from './Components/Footer/Footer';
import Products from './pages/Products';
import Tattoo from './pages/Tattoo';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/tattoo" element={<Tattoo />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
      </BrowserRouter>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
