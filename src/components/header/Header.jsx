import React from 'react'
import './header.css'
import CTA from './CTA'
import PRODUCT from '../../assets/product.png'
import HeaderSocials from './HeaderSocials'
import LOGO from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="flex justify-center">
          <div className="logo">
            <img src={LOGO} alt="techcomp" />
          </div>
        </div>
        
        <HeaderSocials/>
        <div className="me">
            <img src={PRODUCT} alt="me" />
              <div className="content">
                <p>Conoce las promociones de Ultracongeladores</p><br />
                <div className="buttons-container">
                  <a href="https://techcomp-instruments.com/froilabo/?lang=es" target="_blank" className='btn'>Conoce más</a>
                  <a className='btn btn-primary' href="https://api.whatsapp.com/send?phone=5570081678&text=Hola,%20*¡Quiero%20cambiar%20mi%20ultracongelador!*" target="_blank">Solicitar información</a>
                </div>
              </div>
            
        </div>
      </div>
    </header>
  )
}

export default Header