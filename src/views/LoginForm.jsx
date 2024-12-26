import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./loginForm.css";

const LoginForm = ({ onLogin }) => {
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
      // Llamar al callback en caso de login exitoso
      onLogin(userFound); 

      // Establecer que el usuario está logueado
      localStorage.setItem('userLoggedIn', 'true');
      console.log('Estado después de login:', localStorage.getItem('userLoggedIn')); // Verificar que el valor se guarda correctamente

      // Redirigir al Home después del login
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
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
