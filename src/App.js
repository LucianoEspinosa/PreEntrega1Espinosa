import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import CartContextProvider from './components/context/CartContext'
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';


function App() {
  
  return (

    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={'/masvendidos'} element={<ItemListContainer top={true} titulo={"Top en Ventas"} />} />
            <Route path={'/ofertas'} element={<ItemListContainer oferta={true} titulo={"Aprovecha los descuentos"} />} />
            <Route path={'/category/:id'} element={<ItemListContainer />} />
            <Route path={'/item/:id'} element={<ItemDetailContainer />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/checkout'} element={<Checkout />} />
            <Route path={'/thankyou/:orderId'} element={<ThankYou />} />
            <Route path={'*'} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}


export default App;
