import React from 'react';
import './filtrosStyle.css';

const Filtros = ({ onFilterChange }) => {
  return (
    <section id="filtros">
      <nav className="section-nav">
        <div id="opciones-productos">
          <ul>
            <li>
              <button
                id="btn-hombre"
                className="btn-filter"
                onClick={() => onFilterChange('Hombre')}
              >
                Hombres
              </button>
            </li>
            <li>
              <button
                id="btn-mujer"
                className="btn-filter"
                onClick={() => onFilterChange('Mujer')}
              >
                Mujeres
              </button>
            </li>
            <li>
              <button
                id="btn-nino"
                className="btn-filter"
                onClick={() => onFilterChange('Niño')}
              >
                Niños
              </button>
            </li>
            <li>
              <button
                id="btn-todos"
                className="btn-filter"
                onClick={() => onFilterChange('Todos')}
              >
                Todos
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Filtros;