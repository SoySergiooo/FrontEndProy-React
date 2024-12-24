import React from "react";
import './TarjetaStyle.css';

const TarjetaComponente = () => {
  return (
    <section id="info-tarj">
      <h2 className="titulo-seccion-dirpag">Información de tarjeta</h2>
      <label className="lb-input-dirpag" htmlFor="inp-num-tarj">
        Nro de Tarjeta
      </label>
      <input
        className="input-form"
        id="inp-num-tarj"
        type="number"
        pattern="[0-9]{16}"
        required
        placeholder="XXXX-XXXX-XXXX-XXXX"
      />
      <label className="lb-input-dirpag" htmlFor="mes-tarj">
        Mes de Expiración
      </label>
      <select id="mes-tarj" name="mes-tarj" className="input-form" required>
        <option value="" disabled selected>
          Selecciona el mes
        </option>
        {[...Array(12)].map((_, i) => (
          <option key={i} value={String(i + 1).padStart(2, "0")}>
            {String(i + 1).padStart(2, "0")}
          </option>
        ))}
      </select>
      <label className="lb-input-dirpag" htmlFor="anno-tarj">
        Año de caducidad
      </label>
      <select className="input-form" id="anno-tarj" name="anno-tarj" required>
        <option value="" disabled selected>
          Selecciona el año
        </option>
        {Array.from({ length: 10 }, (_, i) => 2024 + i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <label className="lb-input-dirpag" htmlFor="cod-seg-tarj">
        CVV/CVC
      </label>
      <input
        className="input-form"
        type="password"
        id="cod-seg-tarj"
        name="cod-seg-tarj"
        maxLength="4"
        placeholder="123"
        pattern="\d{3,4}"
        required
      />
      <label className="lb-input-dirpag" htmlFor="nom-tarj">
        Nombre de Titular
      </label>
      <input
        className="input-form"
        type="text"
        id="nom-tarj"
        name="nom-tarj"
        placeholder="Peter Parker"
        required
      />
    </section>
  );
};

export default TarjetaComponente;