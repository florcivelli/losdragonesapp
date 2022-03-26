
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos"/>
      <ItemCount initial={1} stock={15} onAdd={onAdd}/>
    </div>
  );
}

export default App;
