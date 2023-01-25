import './App.css';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <div className='container'>
        <h1 className='title-container'>Pokemon's List</h1>

        <Routes>
          <Route path='pokedex-API-React/' element={<PokemonList />} />
          {/* <Route path='/' element={<PokemonList />} /> */}
          <Route path='pokemon/:id' element={<PokemonDetail />} />
        </Routes>

      </div>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}


export default App;
