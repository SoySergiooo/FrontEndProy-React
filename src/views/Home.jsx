import React, { useState } from 'react';
import Banner from '../components/bannerComponente';
import Filtros from '../components/filtrosComponente';
import Catalogo from '../components/catalogoComponente';

const Home = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  return (
    <div>
      <Banner />
      <Filtros onFilterChange={setCategoriaSeleccionada} />
      <main>
        <Catalogo categoria={categoriaSeleccionada} />
      </main>
    </div>
  );
};

export default Home;