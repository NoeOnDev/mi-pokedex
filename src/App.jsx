import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import SearchBar from "./components/SearchBar";
import { FaGithub } from "react-icons/fa";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <div className="header-content">
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <h1>Mi Pokédex</h1>
              </Link>
            </div>
            <div className="search-container">
              <SearchBar />
            </div>
            <nav className="main-nav">
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/about">Acerca de</Link>
                </li>
                <li>
                  <a
                    href="https://github.com/NoeOnDev/mi-pokedex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    <FaGithub size={24} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:name" element={<DetailPage />} />
            <Route path="/about" element={<AboutPage />} />
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
