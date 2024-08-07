import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import './hojas-de-estilo/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';


function App() {
  return (
    <div >
      <BrowserRouter>
        {/* la navbar siempre va a estar en todas las paginas */}
        <Navbar />

        <Routes>
          {/* path='/' : pagina de inicio, element={<ItemListContainer />} : representa el componente que se va a renderizar*/}
          <Route path='/' element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </BrowserRouter>      
    </div>
  );
}

export default App;
