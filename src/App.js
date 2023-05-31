import './App.css';
import React from 'react';
import Header from './components/Header';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path={"/"} element={<React.Fragment><Carrousel /><ItemListContainer /></React.Fragment>} />
          <Route path={'/masvendidos'} element={<ItemListContainer top={true}/>} />
          <Route path={'/category/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
