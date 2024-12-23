import React from 'react';
import Header from './components/headerComponente'; // Ajusta la ruta según la ubicación de tu componente
import Banner from './components/bannerComponente'; // Importa el componente del banner
import Filtros from './components/filtrosComponente'; // Importa el componente de los filtros

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Filtros />
      <main>
        <h1>Bienvenido a mi aplicación</h1>
        <p>Esta es una página de ejemplo.</p>
      </main>
    </div>
  );
}

export default App;