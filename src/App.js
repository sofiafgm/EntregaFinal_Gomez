import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components/NavBar/NavBar.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import CheckoutContainer from './Components/Checkout/CheckoutContainer';
import ProductStock from './Components/ProductStock/ProductStock';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <header className="App-header">
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Tienda" />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CheckoutContainer />} />
            <Route path="/stock" element={<ProductStock />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
