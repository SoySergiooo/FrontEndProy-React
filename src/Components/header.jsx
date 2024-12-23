import React from "react";
import "./Header.css";
import logo from "../assets/images/LogoMochila.png";
import searchIcon from "../assets/images/searchIcon.png";
import ubicacion from "../assets/images/Ubicacion.png";
import login from "../assets/images/Login.png";
import cartEmpty from "../assets/images/cartEmpty.png";
import cartFull from "../assets/images/cartFull.png";
import './styles.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <a href="index.html">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <form action="" method="POST" className="search-form">
        <input
          type="text"
          name="Buscador"
          id="input_buscador"
          placeholder="Buscar Producto"
        />
        <button type="submit" name="boton-buscador" id="boton-buscador">
          <img src={searchIcon} alt="Buscar" />
        </button>
      </form>
      <nav>
        <ul>
          <li className="icon">
            <a href="#Ubicanos">
              <img src={ubicacion} alt="Ubicanos" />
            </a>
          </li>
          <li className="icon">
            <a href="login.html">
              <img src={login} alt="Login" />
            </a>
          </li>
          <li className="icon">
            <a href="carrito-empty.html">
              <img src={cartEmpty} alt="Carrito Vacio" />
            </a>
          </li>
          <li className="icon">
            <a href="carrito.html">
              <img src={cartFull} alt="Carrito Full" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;