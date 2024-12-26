import React, { useState } from 'react';
import './catalogoStyle.css';
import CarteraA from '../assets/images/Cartera A.png';
import MochilaA from '../assets/images/Mochila A.png';
import CarteraB from '../assets/images/Cartera B.png';
import MaletaA from '../assets/images/Maleta A.png';
import MaletaB from '../assets/images/Maleta B.png';
import MochilaB from '../assets/images/Mochila B.png';
import MochilaC from '../assets/images/Mochila C.jpg';

const Catalogo = ({ categoria }) => {
  const [addedProductId, setAddedProductId] = useState(null);

  const catalogo = [
    { id: 1, nombre: "Cartera A", categoria: "Mujer", precio: 200, linkimg: CarteraA },
    { id: 2, nombre: "Mochila A", categoria: "Niño", precio: 150, linkimg: MochilaA },
    { id: 3, nombre: "Cartera B", categoria: "Mujer", precio: 110, linkimg: CarteraB },
    { id: 4, nombre: "Maleta A", categoria: "Hombre", precio: 220, linkimg: MaletaA },
    { id: 5, nombre: "Maleta B", categoria: "Mujer", precio: 300, linkimg: MaletaB },
    { id: 6, nombre: "Mochila B", categoria: "Hombre", precio: 280, linkimg: MochilaB },
    { id: 7, nombre: "Mochila C", categoria: "Niño", precio: 250, linkimg: MochilaC },
  ];

  const productosFiltrados =
    categoria === 'Todos'
      ? catalogo
      : catalogo.filter((producto) => producto.categoria === categoria);

  const agregarAlCarrito = (producto) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    // Actualizamos el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    setAddedProductId(producto.id);

    // Disparar el evento storage para que los otros componentes (Header) se actualicen
    window.dispatchEvent(new Event('storage'));

    // Restablecer el estado del feedback después de un tiempo
    setTimeout(() => {
      setAddedProductId(null);
    }, 1000);  // Se restablece después de 1 segundo
  };

  return (
    <section id="catalogo" className="wrap-productos">
      {productosFiltrados.map((producto) => (
        <article className="art-producto" key={producto.id}>
          <div className="div-content">
            <div className="imagen">
              <img src={producto.linkimg} alt={producto.nombre} />
            </div>
            <h2>{producto.nombre}</h2>
            <p>Precio: S/.{producto.precio}</p>
          </div>
          <button
            className={`BotonAgregarCarrito ${addedProductId === producto.id ? 'agregado' : ''}`}
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al Carrito
          </button>
        </article>
      ))}
    </section>
  );
};

export default Catalogo;