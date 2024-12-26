import React, { useState } from "react";
import "./RegistroStyle.css";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dni: "",
    email: "",
    celular: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (
      !formData.nombre ||
      !formData.apellidoPaterno ||
      !formData.apellidoMaterno ||
      !formData.dni ||
      !formData.email ||
      !formData.celular ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Verificar si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Lógica para almacenar el usuario (en localStorage)
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(formData);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Limpiar el formulario después de registrar
    setFormData({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dni: "",
      email: "",
      celular: "",
      password: "",
      confirmPassword: "",
    });

    setError(""); // Limpiar el mensaje de error
    alert("Usuario registrado con éxito.");
  };

  return (
    <div className="registro-container">
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="apellidoPaterno"
          value={formData.apellidoPaterno}
          onChange={handleChange}
          placeholder="Apellido Paterno"
        />
        <input
          type="text"
          name="apellidoMaterno"
          value={formData.apellidoMaterno}
          onChange={handleChange}
          placeholder="Apellido Materno"
        />
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          placeholder="DNI"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        <input
          type="text"
          name="celular"
          value={formData.celular}
          onChange={handleChange}
          placeholder="Número de celular"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmar Contraseña"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Registrar</button>
      </form>
      <div className="login-link">
        <span>¿Ya tienes una cuenta? </span>
        <a href="/login">Inicia sesión</a>
      </div>
    </div>
  );
}

export default Registro;
