import React from 'react';
import './filtrosStyle.css';

const Filtros = () => {
  return (
    <section id="filtros">
      <nav className="section-nav">
        <div id="opciones-productos">
          <ul>
            <li>
              <button id="btn-hombre" className="btn-filter">Hombres</button>
            </li>
            <li>
              <button id="btn-mujer" className="btn-filter">Mujeres</button>
            </li>
            <li>
              <button id="btn-nino" className="btn-filter">Niños</button>
            </li>
            <li>
              <button id="btn-todos" className="btn-filter">Todos</button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Filtros;