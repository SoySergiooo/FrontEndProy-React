import React from 'react';
import './catalogoStyle.css';
import CarteraA from '../assets/images/Cartera A.png';
import MochilaA from '../assets/images/Mochila A.png';
import CarteraB from '../assets/images/Cartera B.png';
import MaletaA from '../assets/images/Maleta A.png';
import MaletaB from '../assets/images/Maleta B.png';
import MochilaB from '../assets/images/Mochila B.png';
import MochilaC from '../assets/images/Mochila C.jpg';

const Catalogo = ({ categoria }) => {
  const catalogo = [
    {
      id: 1,
      nombre: "Cartera A",
      categoria: "Mujer",
      tipo: "Cartera",
      precio: 200,
      linkimg: CarteraA,
      alt: "Cartera A",
      linkbutton: "PagCarteraA.html"
    },
    {
      id: 2,
      nombre: "Mochila A",
      categoria: "Niño",
      tipo: "Mochila",
      precio: 150,
      linkimg: MochilaA,
      alt: "Mochila A",
      linkbutton: "PagMochilaA.html"
    },
    {
      id: 3,
      nombre: "Cartera B",
      categoria: "Mujer",
      tipo: "Cartera",
      precio: 110,
      linkimg: CarteraB,
      alt: "Cartera B",
      linkbutton: "PagCarteraB.html"
    },
    {
      id: 4,
      nombre: "Maleta A",
      categoria: "Hombre",
      tipo: "Maleta",
      precio: 220,
      linkimg: MaletaA,
      alt: "Maleta A",
      linkbutton: "PagMaletaA.html"
    },
    {
      id: 5,
      nombre: "Maleta B",
      categoria: "Mujer",
      tipo: "Maleta",
      precio: 300,
      linkimg: MaletaB,
      alt: "Maleta B",
      linkbutton: "PagMaletaB.html"
    },
    {
      id: 6,
      nombre: "Mochila B",
      categoria: "Hombre",
      tipo: "Mochila",
      precio: 280,
      linkimg: MochilaB,
      alt: "Mochila B",
      linkbutton: "PagMochilaB.html"
    },
    {
      id: 7,
      nombre: "Mochila C",
      categoria: "Niño",
      tipo: "Mochila",
      precio: 250,
      linkimg: MochilaC,
      alt: "Mochila C",
      linkbutton: "PagMochilaC.html"
    },
  ];

const productosFiltrados =
categoria === 'Todos'
  ? catalogo
  : catalogo.filter((producto) => producto.categoria === categoria);

return (
<section id="catalogo" className="wrap-productos">
  {productosFiltrados.map((producto) => (
    <article className="art-producto" key={producto.id}>
      <div className="div-content">
        <div className="imagen">
          <img src={producto.linkimg} alt={producto.alt} />
        </div>
        <h2>{producto.nombre}</h2>
        <p>
          Tipo: <span className="tipo-producto">{producto.tipo}</span>
        </p>
        <p>
          Categoría: <span className="cat-producto">{producto.categoria}</span>
        </p>
        <p>
          Precio: S/.<span className="precio-producto">{producto.precio}</span>
        </p>
      </div>
      <button
        className="BotonAgregarCarrito"
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al Carrito
      </button>
    </article>
  ))}
</section>
);
};

const agregarAlCarrito = (producto) => {
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const productoExistente = carrito.find((item) => item.id === producto.id);

if (productoExistente) {
productoExistente.cantidad += 1;
alert(`Se agregó otra unidad de "${producto.nombre}" al carrito.`);
} else {
carrito.push({ ...producto, cantidad: 1 });
alert(`Producto "${producto.nombre}" agregado al carrito.`);
}

localStorage.setItem('carrito', JSON.stringify(carrito));
};

export default Catalogo;