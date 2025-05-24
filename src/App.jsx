import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import ComparePage from "./pages/ComparePage";
import SearchBar from "./components/SearchBar";
import MobileMenu from "./components/MobileMenu";
import { FaGithub } from "react-icons/fa";
import { CompareProvider } from "./contexts/CompareContext";
import "./index.css";

function App() {
  return (
    <CompareProvider>
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
              <nav className="main-nav desktop-nav">
                <ul>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/compare">Comparar</Link>
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
              <div className="mobile-nav">
                <MobileMenu />
              </div>
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pokemon/:name" element={<DetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/compare" element={<ComparePage />} />
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
    </CompareProvider>
  );
}

export default App;
