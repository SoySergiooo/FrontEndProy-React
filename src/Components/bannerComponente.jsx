import React from 'react';
import './bannerStyle.css'; // Archivo CSS para estilos específicos del banner
import bannerImage from '../assets/images/banner.jpg'; // Asegúrate de ajustar la ruta según tu estructura

const Banner = () => {
  return (
    <section id="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </section>
  );
};

export default Banner;