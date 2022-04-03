
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemCount initial={1} stock={15} onAdd={onAdd}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
