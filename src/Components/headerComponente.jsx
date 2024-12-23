import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import './headerStyle.css';

// Importa las imágenes desde la carpeta src/assets/images
import LogoMochila from '../assets/images/LogoMochila.png';
import SearchIcon from '../assets/images/searchIcon.png';
import Ubicacion from '../assets/images/Ubicacion.png';
import Login from '../assets/images/Login.png';
import Logout from '../assets/images/Logout.png';
import CartEmpty from '../assets/images/cartEmpty.png';
import CartFull from '../assets/images/cartFull.png';

const Header = () => {
  const cerrarSesion = () => {
    console.log('Sesión cerrada');
    return false; // Simula el retorno necesario para evitar la acción predeterminada.
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
            <Link to="#Ubicanos">
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
          <li className="icon" id="icono-carrito-vacio">
            <Link to="/carrito-empty">
              <img src={CartEmpty} alt="Carrito Vacio" className="icono-carrito-vacio" />
            </Link>
          </li>
          <li className="icon" id="icono-carrito-lleno">
            <Link to="/carrito">
              <img src={CartFull} alt="Carrito Full" className="icono-carrito-full" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;