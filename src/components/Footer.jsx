// import logo from "./img/logo-texto.png";
// import location from "./img/icon/geo-alt-fill.svg";
// import mail from "./img/icon/envelope-at.svg";
// import phone from "./img/icon/telephone.svg";
// import facebook from "./img/icon/facebook.svg";
// import instagram from "./img/icon/instagram.svg";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer  border-top border-bottom" style={{ backgroundColor: 'rgb(250, 247, 242)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Información de contacto</h5>
                        <p>Dirección: Calle Ejemplo 123, Ciudad</p>
                        <p>Teléfono: +123456789</p>
                        <p>Email: ejemplo@example.com</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className='text-decoration-none text-secondary'>Inicio</Link></li>
                            <li><Link to="/productos" className='text-decoration-none text-secondary'>Productos</Link></li>
                            <li><Link to="/servicios" className='text-decoration-none text-secondary'>Servicios</Link></li>
                            <li><Link to="/acerca-de" className='text-decoration-none text-secondary'>Acerca de</Link></li>
                            <li><Link to="/contacto" className='text-decoration-none text-secondary'>Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className='text-center'>Síguenos en redes sociales</h5>
                        <ul className="list-unstyled d-flex  gap-2 fs-3  justify-content-center">
                            <li><Link to="#" className='text-decoration-none text-secondary'><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li><Link to="#" className='text-decoration-none text-secondary'><FontAwesomeIcon icon={faTwitter} /></Link></li>
                            <li><Link to="#" className='text-decoration-none text-secondary'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            <li><Link to="#" className='text-decoration-none text-secondary'><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                            <li><Link to="#" className='text-decoration-none text-secondary'><FontAwesomeIcon icon={faYoutube} /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mt-3">Todos los derechos reservados &copy; 2023</p>
                    </div>
                </div>
            </div>
        </footer>


    )
}
export default Footer;