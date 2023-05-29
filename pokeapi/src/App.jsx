import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="bg-slate-600 h-full">
      <Navbar />
      <PokemonList />
      <Footer />
    </div>
  );
}

export default App;
