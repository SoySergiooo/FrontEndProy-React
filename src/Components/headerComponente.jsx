import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App'; // Usamos el hook useAuth del contexto
import './headerStyle.css';

import LogoMochila from '../assets/images/LogoMochila.png';
import Ubicacion from '../assets/images/Ubicacion.png';
import Login from '../assets/images/Login.png';
import Logout from '../assets/images/Logout.png';
import CartEmpty from '../assets/images/cartEmpty.png';
import CartFull from '../assets/images/cartFull.png';

const Header = () => {
  const { currentUser, logout } = useAuth(); // Consumimos el contexto de autenticación
  const [carritoVacio, setCarritoVacio] = useState(true);

  // Función para actualizar el carrito y verificar si está vacío
  const actualizarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarritoVacio(carrito.length === 0);
  };

  useEffect(() => {
    actualizarCarrito();

    // Evento que se disparará cuando el localStorage se actualice
    window.addEventListener('storage', actualizarCarrito);

    return () => {
      window.removeEventListener('storage', actualizarCarrito);
    };
  }, []);

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

          {/* Si el usuario está logueado, muestra el ícono de Logout, si no, el de Login */}
          <li className="icon" id="icono-login-logout">
            {currentUser ? (
              <a href="#" onClick={logout}>
                <img src={Logout} alt="Cerrar Sesión" className="icono-logout" />
              </a>
            ) : (
              <Link to="/login">
                <img src={Login} alt="Login" className="icono-login" />
              </Link>
            )}
          </li>
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