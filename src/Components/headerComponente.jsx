import React from 'react';
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
        <a href="/index.html">
          <img src={LogoMochila} alt="Logo" className="logo" />
        </a>
      </div>
      <form action="" method="POST" className="search-form">
        <input
          type="text"
          name="Buscador"
          id="input_buscador"
          defaultValue="Buscar Producto"
        />
        <button type="submit" name="boton-buscador" id="boton-buscador">
          <img src={SearchIcon} alt="Buscar" className="icon-buscar" />
        </button>
      </form>
      <nav>
        <ul>
          <li className="icon" id="icono-ubicacion">
            <a href="#Ubicanos">
              <img src={Ubicacion} alt="Ubicanos" className="icono-ubicacion" />
            </a>
          </li>
          <li className="icon" id="icono-login">
            <a href="/login.html">
              <img src={Login} alt="Login" className="icono-carrito-vacio" />
            </a>
          </li>
          <li className="icon" id="icono-logout">
            <a href="#" onClick={cerrarSesion}>
              <img src={Logout} alt="Cerrar Sesión" className="icono-carrito-vacio" />
            </a>
          </li>
          <li className="icon" id="icono-carrito-vacio">
            <a href="/carrito-empty.html">
              <img src={CartEmpty} alt="Carrito Vacio" className="icono-carrito-vacio" />
            </a>
          </li>
          <li className="icon" id="icono-carrito-lleno">
            <a href="/carrito.html">
              <img src={CartFull} alt="Carrito Full" className="icono-carrito-full" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;