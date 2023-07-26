import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import CartProvider from './context/CartContext';
import "./App.css"


function App() {
  return(
  <>
  <BrowserRouter>

      <CartProvider>
          <NavBar/>
              <Routes>
                  <Route path='/' element={<ItemListConteiner/>}/>
                  <Route path='/categoria/:categoriaId' element={<ItemListConteiner/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/detalle/:detalleId' element={<ItemDetailConteiner/>}/>
              </Routes>
      </CartProvider>
  </BrowserRouter>
  </>
    
  );
}

export default App;
