import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Mi Pokédex</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:name" element={<DetailPage />} />
          </Routes>
        </main>
        <footer>
          <p>
            Datos obtenidos de{" "}
            <a
              href="https://pokeapi.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokeAPI
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
