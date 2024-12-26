import React from "react";
import RegistroComponente from "../components/RegistroComponente"; 
import Footer from "../components/footerComponente"; 
import "../components/registroStyle.css"; 

const Registro = () => {
  return (
    <div>
      <main>
        <section id="registro-section">
          <div className="form-container">
            <RegistroComponente /> 
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Registro;