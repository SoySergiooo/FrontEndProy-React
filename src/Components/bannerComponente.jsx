import React from 'react';
import './bannerStyle.css'; 
import bannerImage from '../assets/images/banner.jpg'; 

const Banner = () => {
  return (
    <section id="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </section>
  );
};

export default Banner;