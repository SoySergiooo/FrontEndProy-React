import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/headerComponente'; // Ajusta las rutas según tu proyecto
import Home from './views/Home'; // Página principal
import NotFound from './views/NotFound'; // Página de error 404
import Carrito from './views/Carrito';
import Pago from './views/Pago'; // Importa la nueva vista de Pago

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pago" element={<Pago />} /> {/* Nueva ruta para Pago */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;












/* import React from 'react';
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

export default App; */