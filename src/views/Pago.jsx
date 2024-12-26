import React from "react";
import { Link } from "react-router-dom";
import DireccionComponente from "../components/DireccionComponente";
import TarjetaComponente from "../components/TarjetaComponente";
import "./pagoStyle.css";
import Footer from '../components/footerComponente';

const Pago = () => {
  return (
    <div>
    <main>
      <section id="dire-tarj">
        <div className="volver-container">
          <Link to="/carrito">← Volver</Link>
        </div>
        <form className="form-dir-pago">
          <DireccionComponente />
          <TarjetaComponente />
          <button type="submit" id="boton-pago">
            Confirma Pago
          </button>
        </form>
      </section>
    </main>
    </div>
  );
};

export default Pago;