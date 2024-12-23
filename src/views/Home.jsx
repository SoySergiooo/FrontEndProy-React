import React, { useState } from 'react';
import Banner from '../components/bannerComponente';
import Filtros from '../components/filtrosComponente';
import Catalogo from '../components/catalogoComponente';
import Footer from '../components/footerComponente'; // Importa el componente del footer

const Home = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  return (
    <div>
      <Banner />
      <Filtros onFilterChange={setCategoriaSeleccionada} />
      <main>
        <Catalogo categoria={categoriaSeleccionada} />
      </main>
      <Footer /> {/* Agrega el footer aquí */}
    </div>
  );
};

export default Home;