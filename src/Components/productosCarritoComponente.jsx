import React, { useEffect, useState } from 'react';
import './productosCarritoStyle.css';

const ProductosCarritoComponente = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    generarCarrito();
  }, []);

  const obtenerCarritoDesdeLocalStorage = () => {
    return JSON.parse(localStorage.getItem('carrito')) || [];
  };

  const guardarCarritoEnLocalStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };

  const generarCarrito = () => {
    const carrito = obtenerCarritoDesdeLocalStorage();
    let total = 0;

    carrito.forEach((item) => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;
    });

    setCarrito(carrito);
    setTotal(total);
  };

  const actualizarCantidad = (id, cambio) => {
    let carrito = obtenerCarritoDesdeLocalStorage();
    const item = carrito.find((producto) => producto.id === id);
  
    if (item) {
      if (item.cantidad === 1 && cambio === -1) {
        carrito = carrito.filter((producto) => producto.id !== id);
      } else {
        item.cantidad = Math.max(1, item.cantidad + cambio);
      }
  
      guardarCarritoEnLocalStorage(carrito);
      generarCarrito();
  
      // Emitir el evento 'storage' para actualizar otros componentes
      window.dispatchEvent(new Event('storage'));
    }
  };

  return (
    <div className="carrito-contenedor">
      {carrito.length === 0 ? (
        <p className="carrito-vacio">No hay productos en el carrito</p>
      ) : (
        carrito.map((item) => {
          const subtotal = item.precio * item.cantidad;
          return (
            <div key={item.id} className="producto-carrito">
              <div className="producto-imagen">
              <img src={item.linkimg} alt={item.nombre} className="imagen-producto" />
              </div>
              <div className="producto-detalles">
                <h3 className="producto-nombre">{item.nombre}</h3>
                <div className="producto-cantidad">
                  <button
                    type="button"
                    className="btn-cantidad"
                    onClick={() => actualizarCantidad(item.id, -1)}
                  >
                    -
                  </button>
                  <label className="cantidad-producto">{item.cantidad}</label>
                  <button
                    type="button"
                    className="btn-cantidad"
                    onClick={() => actualizarCantidad(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <p className="producto-precio">Precio Unitario: S/. {item.precio.toFixed(2)}</p>
                <p className="producto-subtotal">Subtotal: S/. {subtotal.toFixed(2)}</p>
              </div>
            </div>
          );
        })
      )}
      <div className="carrito-total">
        <strong>Total:</strong> S/. {total.toFixed(2)}
      </div>
    </div>
  );
};

export default ProductosCarritoComponente;