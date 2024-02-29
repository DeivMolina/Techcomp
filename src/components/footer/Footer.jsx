import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import { FiMapPin } from 'react-icons/fi'; 


const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <a href="#" className='footer__logo' >TECHCOMP LATINO S.A. de C.V.</a>
        {/* <ul className='permalinks'>
          <li><a href="https://techcomp-instruments.com/?lang=es" target="_blank">Visita nuestro Sitio</a></li>
        </ul> */}
      </div>
      <div className="footer-bottom">
        <div className="footer-column">
          <a href='https://maps.app.goo.gl/gUJFjCdr4vdmkkRE6'>
          <p><FiMapPin /> AV. Gustavo Baz no. 2160 esq. Mario Colin Colonia La Loma CP 54060 <br /> Tlalnepantla de Baz, Estado de México</p>
          </a><br />
          <p>Aviso de Privacidad</p>
        </div>
      </div>
      <hr />
      <div className="disclaimer">
        <p>Pagina desarrollada por<em> Rocky Creativo</em></p>
      </div>
    </footer>
  )
}

export default Footer;
