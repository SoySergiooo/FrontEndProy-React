import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponente from '../components/headerComponente';
import FooterComponente from '../components/footerComponente';
import ProductosCarritoComponente from '../components/productosCarritoComponente';
import './carritoStyle.css';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito desde el localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
      setCarrito(carritoGuardado);
    };
  
    // Escuchar el evento 'storage'
    window.addEventListener('storage', handleStorageChange);
  
    // Cargar el carrito inicialmente
    handleStorageChange();
  
    // Eliminar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);  // Verificar si el carrito está vacío
  const isCarritoVacio = carrito.length === 0;

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
            {isCarritoVacio ? (
              // Si el carrito está vacío, renderizamos un botón deshabilitado
              <button className="btn-pago disabled" disabled>
                Ir a Pagar
              </button>
            ) : (
              // Si el carrito no está vacío, renderizamos el Link normal
              <Link to="/pago" className="btn-pago">
                Ir a Pagar
              </Link>
            )}
          </div>
        </section>
      </main>
      <FooterComponente />
    </div>
  );
};

export default Carrito;