import './App.css';
import { ItemListContainer } from './components/ItemListContainer/itemListContainer';
import {NavBar} from './components/navBar/navBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
     
    </div>
  );
}

export default App;
