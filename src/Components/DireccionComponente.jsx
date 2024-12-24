import React from "react";

const DireccionComponente = () => {
  return (
    <section id="dir-entrega">
      <h2 className="titulo-seccion-dirpag">Confirma tu dirección</h2>
      <label className="lb-num-dirpag" htmlFor="inp-dir-calle">
        Dirección
      </label>
      <input
        type="text"
        className="inp-text-dir"
        id="inp-dir-calle"
        name="inp-dir-calle"
        placeholder="Av. Hola Mundo 404"
        required
      />
      <label className="lb-num-dirpag" htmlFor="inp-dir-ciudad">
        Ciudad
      </label>
      <input
        type="text"
        className="inp-text-dir"
        id="inp-dir-ciudad"
        name="inp-dir-ciudad"
        required
      />
      <label className="lb-num-dirpag" htmlFor="inp-dir-dep">
        Departamento
      </label>
      <select className="input-form" id="inp-dir-dep" name="inp-dir-dep" required>
        <option value="" selected disabled>
          Seleccione un departamento
        </option>
        <option value="Amazonas">Amazonas</option>
        <option value="Áncash">Áncash</option>
        <option value="Apurímac">Apurímac</option>
        <option value="Arequipa">Arequipa</option>
        <option value="Ayacucho">Ayacucho</option>
        <option value="Cajamarca">Cajamarca</option>
        <option value="Callao">Callao</option>
        <option value="Cusco">Cusco</option>
        <option value="Huancavelica">Huancavelica</option>
        <option value="Huánuco">Huánuco</option>
        <option value="Ica">Ica</option>
        <option value="Junín">Junín</option>
        <option value="La Libertad">La Libertad</option>
        <option value="Lambayeque">Lambayeque</option>
        <option value="Lima">Lima</option>
        <option value="Loreto">Loreto</option>
        <option value="Madre de Dios">Madre de Dios</option>
        <option value="Moquegua">Moquegua</option>
        <option value="Pasco">Pasco</option>
        <option value="Piura">Piura</option>
        <option value="Puno">Puno</option>
        <option value="San Martín">San Martín</option>
        <option value="Tacna">Tacna</option>
        <option value="Tumbes">Tumbes</option>
        <option value="Ucayali">Ucayali</option>
      </select>
      <label className="lb-num-dirpag" htmlFor="inp-dir-zip">
        Zip Code
      </label>
      <input
        type="number"
        className="inp-text-dir"
        id="inp-dir-zip"
        name="inp-dir-zip"
        required
      />
      <label className="lb-num-dirpag" htmlFor="inp-dir-tel">
        Teléfono
      </label>
      <input
        type="tel"
        className="inp-text-dir"
        id="inp-dir-tel"
        name="inp-dir-tel"
        required
      />
    </section>
  );
};

export default DireccionComponente;