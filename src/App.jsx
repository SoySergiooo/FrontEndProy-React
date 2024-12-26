import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/headerComponente';
import Home from './views/Home';
import Carrito from './views/Carrito';
import Pago from './views/Pago'; // Página de pago
import NotFound from './views/NotFound'; // Página para rutas no encontradas
import FooterComponente from './components/footerComponente';
import LoginForm from "./views/LoginForm";

function App() {

  const [usuarios] = useState([
    { email: "ugalvez987@gmail.com", password: "asdf1234" },
    { email: "otroemail@gmail.com", password: "12345678" },
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    alert(`Bienvenido, ${user.email}`);

  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/login" element={<LoginForm usuarios={usuarios} onLogin={handleLogin} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComponente />
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