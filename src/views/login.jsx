import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginFormComponente"; // Asegúrate de importar el formulario

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (user) => {
    // Lógica después de un login exitoso
    console.log("Usuario logueado:", user);
    alert(`Bienvenido, ${user.nombre}`);

    // Redirigir al Home después de un login exitoso
    navigate('/');
  };

  return (
    <div className="login-page">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;