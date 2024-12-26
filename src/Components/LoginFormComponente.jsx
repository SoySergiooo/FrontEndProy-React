import React, { useState } from "react";
import { useAuth } from '../App'; // Usamos el hook useAuth del contexto
import { useNavigate } from 'react-router-dom';
import "./loginFormStyle.css";

const LoginForm = () => {
  const { login } = useAuth(); // Obtenemos la función login desde el contexto
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los usuarios desde localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validar credenciales
    const userFound = usuarios.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      // Llamar al contexto para iniciar sesión
      login(userFound);

      // Redirigir al Home después de un login exitoso
      navigate('/');
    } else {
      setError("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Iniciar sesión</h1>
        {error && <p className="error-message">{error}</p>}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Contraseña"
          />
        </div>
        <button type="submit">Iniciar sesión</button>
        <p>¿No tienes una cuenta? <a className="register-link" href="/registro">Regístrate</a></p>
      </form>
    </div>
  );
};

export default LoginForm;