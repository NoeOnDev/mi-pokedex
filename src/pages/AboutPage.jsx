import { FaGithub } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="about-page">
      <h2>Acerca de Mi Pokédex</h2>
      <div className="about-content">
        <p>
          Esta aplicación fue creada como un proyecto para mostrar el uso de
          React con la API de Pokémon (PokeAPI).
        </p>
        <h3>Acerca del Desarrollador</h3>
        <p>
          Mi nombre es Noé Alejandro Rodríguez Moto. Soy un desarrollador web
          apasionado por crear aplicaciones interactivas y amigables para el
          usuario. Este proyecto es un ejemplo de mis habilidades en React y el
          manejo de APIs. Me encanta aprender nuevas tecnologías y mejorar mis
          habilidades de programación. Siempre estoy buscando nuevos desafíos y
          oportunidades para crecer como desarrollador.
        </p>
        <p>
          Puedes encontrar más de mis proyectos en mi perfil de GitHub o
          contactarme a través de los enlaces a continuación.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/NoeOnDev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaGithub size={30} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
