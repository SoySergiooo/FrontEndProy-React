import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import HeaderComponente from '../components/headerComponente';
import FooterComponente from '../components/footerComponente';
import ProductosCarritoComponente from '../components/productosCarritoComponente';
import './carritoStyle.css';

const Carrito = () => {
  return (
    <div>
      <HeaderComponente />
      <main>
        <section>
          <div className="titulo-carrito">
            <h2>Mi Carrito</h2>
          </div>
          <ProductosCarritoComponente />
          <div className="botones-carrito">
            <Link to="/" className="btn-regresar">Volver</Link>
            <Link to="/pago" className="btn-pago">Ir a Pagar</Link>
          </div>
        </section>
      </main>
      <FooterComponente />
    </div>
  );
};

export default Carrito;