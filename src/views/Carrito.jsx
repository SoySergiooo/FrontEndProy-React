import React from 'react';
import HeaderComponente from '../components/headerComponente';
import FooterComponente from '../components/footerComponente';
import ProductosCarritoComponente from '../components/productosCarritoComponente';

const Carrito = () => {
  return (
    <div>
      <HeaderComponente />
      <main>
        <section>
          <h2>Mi Carrito</h2>
          <ProductosCarritoComponente />
          <div className="botones-carrito">
            <a href="/" className="btn-regresar">Volver</a>
            <a className="btn-pago-able" href="/pago">Ir a Pagar</a>
          </div>
        </section>
      </main>
      <FooterComponente />
    </div>
  );
};

export default Carrito;