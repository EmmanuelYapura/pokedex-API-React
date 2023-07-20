import './App.css';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { PokemonList } from './components/PokemonList';
import { PokemonDetail } from './components/PokemonDetail';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='pokemon/:id' element={<PokemonDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
