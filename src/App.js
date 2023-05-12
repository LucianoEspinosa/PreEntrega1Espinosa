import './App.css';
import Header from './components/Header';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (

    <div className="App">
      <Header />
      <ItemListContainer titulo={"HOT WEEK"} subtitulo={"💣¡SEGUÍ APROVECHANDO LAS OFERTAS!"}  />
      <Carrousel />
      <Footer />
    </div>
  );
}

export default App;
