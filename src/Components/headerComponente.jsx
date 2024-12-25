import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css';

import LogoMochila from '../assets/images/LogoMochila.png';
import Ubicacion from '../assets/images/Ubicacion.png';
import Login from '../assets/images/Login.png';
import Logout from '../assets/images/Logout.png';
import CartEmpty from '../assets/images/cartEmpty.png';
import CartFull from '../assets/images/cartFull.png';

const Header = () => {
  const [carritoVacio, setCarritoVacio] = useState(true);

  // Función para actualizar el carrito y verificar si está vacío
  const actualizarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarritoVacio(carrito.length === 0);
  };

  // Usamos useEffect para actualizar el carrito cuando la página carga o cuando se modifica
  useEffect(() => {
    actualizarCarrito();

    // Evento que se disparará cuando el localStorage se actualice
    window.addEventListener('storage', actualizarCarrito);

    // Limpia el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('storage', actualizarCarrito);
    };
  }, []);

  const cerrarSesion = () => {
    console.log('Sesión cerrada');
    return false;
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={LogoMochila} alt="Logo" className="logo" />
        </Link>
      </div>

      <nav>
        <ul>
          <li className="icon" id="icono-ubicacion">
            <Link to="*">
              <img src={Ubicacion} alt="Ubicanos" className="icono-ubicacion" />
            </Link>
          </li>
          <li className="icon" id="icono-login">
            <Link to="/login">
              <img src={Login} alt="Login" className="icono-carrito-vacio" />
            </Link>
          </li>
          <li className="icon" id="icono-logout">
            <a href="#" onClick={cerrarSesion}>
              <img src={Logout} alt="Cerrar Sesión" className="icono-carrito-vacio" />
            </a>
          </li>
          {/* Muestra el ícono de carrito correspondiente */}
          {carritoVacio ? (
            <li className="icon" id="icono-carrito-vacio">
              <Link to="/carrito">
                <img src={CartEmpty} alt="Carrito Vacio" className="icono-carrito-vacio" />
              </Link>
            </li>
          ) : (
            <li className="icon" id="icono-carrito-lleno">
              <Link to="/carrito">
                <img src={CartFull} alt="Carrito Full" className="icono-carrito-full" />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;