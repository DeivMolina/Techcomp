import React from 'react'
import './header.css'
import CTA from './CTA'
import PRODUCT from '../../assets/product.jpg'
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
        <CTA />
        <HeaderSocials/>
        <div className="me">
            <img src={PRODUCT} alt="me" />
            <div class="content">
                <p>Conoce las promociones de Ultracongeladores</p><br />
                <a href="https://techcomp-instruments.com/froilabo/?lang=es" target="_blank" className='btn'>Saber más...</a>
            </div>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header