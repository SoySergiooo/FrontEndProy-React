import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/headerComponente';
import Home from './views/Home';
import Carrito from './views/Carrito';
import Pago from './views/Pago';
import NotFound from './views/NotFound';
import FooterComponente from './components/footerComponente';
import Login from "./views/login";
import Registro from "./views/Registro"; 


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function App() {
  //Estado de autenticación
  const [currentUser, setCurrentUser] = useState(null);

  //Función de login
  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Guardamos el usuario en localStorage
  };

  //Función de logout
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user'); // Eliminamos el usuario de localStorage
  };

  // Verifica si el usuario está logueado al cargar la app
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterComponente />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

