import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' style={{ pointerEvents: 'none' }}>TechComp</a>


      <ul className='permalinks'>
        <li> <a href="https://techcomp-instruments.com/?lang=es" target="_blank">Visita nuestro Sitio</a> </li>
        
      </ul>
    </footer>
  )
}

export default Footer