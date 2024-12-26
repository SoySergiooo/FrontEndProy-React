import React, { useState } from "react";
import "./loginForm.css"

const LoginForm = ({ usuarios, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar credenciales
    const userFound = usuarios.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      onLogin(userFound); // Llamar al callback en caso de login exitoso
    } else {
      setError("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar sesión</h2>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
        <p>¿No tienes una cuenta? <a className="register-link" href="/registrate">Regístrate</a></p>
      </form>
    </div>
  );
};

export default LoginForm;
