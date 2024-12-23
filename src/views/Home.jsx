import React from 'react';
import Banner from '../components/bannerComponente'; // Ajusta la ruta según la estructura de tu proyecto
import Filtros from '../components/filtrosComponente'; // Ajusta la ruta según la estructura de tu proyecto

const Home = () => {
  return (
    <div>
      <Banner />
      <Filtros />
      <main>
        <h1>Bienvenido a mi aplicación</h1>
        <p>Esta es una página de ejemplo.</p>
      </main>
    </div>
  );
};

export default Home;