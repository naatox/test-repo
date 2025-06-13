import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Lista de chistes fomes de agradecimiento
  const jokes = [
    '¿Por qué no dejaron subirse al puzzle al avión? Porque estaba armado.',
    'En Hawai uno no se hospeda, se aloha.',
    '¿Por qué los ginecólogos no van al oculista? Porque ven la zorra.',
    'Una vez había un perro llamado “calcetín”, salió a la calle y se lo pusieron.',
    'Era una señora tan gorda que cuando la cremaron, quedó cruda.',
    'Buenas tardes, ¿tiene desodorante? — ¿De bola? — No, de axila.',
    '¿Qué es un moño? Un añimal que come bañañas.',
    '¿Cómo se llama el campeón japonés de buceo? Tokofondo. Y el segundo lugar? Kasitoko.',
    '¿Usted conoce el chiste del Pocoyó? — No. — Yo tampoco.',
    'Había una vez, truz.',
    '¿Qué hace un elefante sobre una pata? Dejar viudo al pato.',
    '¿Por qué existen Los Prisioneros? Por La Ley.',
    '¿Cómo se dice pañuelo en japonés? Saka-moko.',
    '¿En qué se parece un cura a un huevo Kinder? En que nunca sabes qué te va a tocar.',
    '¿Cómo se llama el perro sin patas? No sé, pero no va a venir.',
    '¿Qué le dijo un semáforo a otro? No me mires que me estoy cambiando.',
    '¿Cómo hace un limón? ¡Exprimir-te!',
    '¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.'
    

  ];

  // Rutas relativas a 'public/img'
  const snoopyImages = [
    '/img/snoopy1.webp',
    '/img/snoopy2.webp',
    '/img/snoopy3.webp',
    '/img/snoopy4.webp',
    '/img/snoopy5.webp',
    '/img/snoopy6.webp',
  ];

  // Estados de componente
  const [jokeIndex, setJokeIndex] = useState(0);
  const [currentJoke, setCurrentJoke] = useState(jokes[0]);
  const [imgSrc, setImgSrc] = useState(snoopyImages[0]);
  const [imgWidth, setImgWidth] = useState(100); // ancho inicial en px

  // Al cambiar el índice, actualiza chiste e imagen
  useEffect(() => {
    setCurrentJoke(jokes[jokeIndex]);
    setImgSrc(snoopyImages[jokeIndex % snoopyImages.length]);
  }, [jokeIndex]);

  // Muestra el siguiente chiste
  const handleJokeClick = () => {
    setJokeIndex(prev => (prev + 1) % jokes.length);
  };

  // Agranda la imagen al hacer click
  const handleImageClick = () => {
    setImgWidth(prev => prev + 20);
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <h1>Gracias, Vignette</h1>
        <p>GRACIAS NETTY POR TRAERME A MI CASA, TE QUIEROOOO</p>

        {/* Mostrar chiste */}
        <p className="joke-text">{currentJoke}</p>

        {/* Botón para siguiente chiste */}
        <div className="button-group">
          <button onClick={handleJokeClick} className="btn-pink">
            CLICK PARA UN CHISTE FOME DE AGRADECIMIENTO
          </button>
        </div>

        {/* Imagen de Snoopy local que crece al click */}
        <img
          src={imgSrc}
          alt="Snoopy"
          className="snoopy-img"
          style={{ width: `${imgWidth}px` }}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}

export default App;