// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import './hojas-de-estilo/App.css';


function App() {
  return (
    <div >
      <Navbar />
      <ItemListContainer /> 
      <ItemDetailContainer itemID={2}/>
    </div>
  );
}

export default App;
