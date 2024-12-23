import React from 'react';
import './footerStyle.css';

const FooterComponente = () => {
    return (
        <footer className="footer">
            <div className="footer-contenedor">
                <div className="footer-info">
                    <h3>Sobre Nosotros</h3>
                    <p>
                        Somos una empresa dedicada a ofrecer los mejores productos y servicios
                        con la mayor calidad. Tu satisfacción es nuestra prioridad.
                    </p>
                </div>
                <div className="footer-links">
                    <h4>Enlaces Útiles</h4>
                    <ul>
                        <li><a href="/about">Acerca de</a></li>
                        <li><a href="/contact">Contáctanos</a></li>
                        <li><a href="/privacy">Política de Privacidad</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contáctanos</h4>
                    <p>Email: contacto@mochilonga.com</p>
                    <p>Teléfono: +34 123 456 789</p>
                    <p>Dirección: Calle Hola Mundo, 404, Lima, Perú</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default FooterComponente;