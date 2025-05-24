import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="mobile-menu-container">
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {isOpen && (
        <div className="mobile-menu">
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>Inicio</Link>
              </li>
              <li>
                <Link to="/compare" onClick={toggleMenu}>Comparar</Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>Acerca de</Link>
              </li>
              <li>
                <a
                  href="https://github.com/NoeOnDev/mi-pokedex"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  <FaGithub size={20} /> GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;