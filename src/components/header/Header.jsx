import React from 'react'
import './header.css'
import CTA from './CTA'
import PRODUCT from '../../assets/product.png'
import HeaderSocials from './HeaderSocials'
import LOGO from '../../assets/logo.png'
import LogoFriolabo from '../../assets/Froilabo-logo.png'

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <div className="logo">
          <a href="https://techcomp-instruments.com/?lang=es" target='_blank'>
            <img src={LogoFriolabo} alt="friolabo" />
          </a>
        </div>

        <div className="logo">
          <a href="https://techcomp-instruments.com/?lang=es" target='_blank'>
            <img src={LOGO} alt="techcomp" />
          </a>
        </div>
      </div>

      <div className="container header__container">
        {/* <HeaderSocials/> */}
        <div className="me">
            <img src={PRODUCT} alt="me" />
              <div className="content">

              <p className='paragraph'><b>Congelación confiable</b>, calidad <span className='paragraph-span'>europea garantizada </span>.</p>
              <p className='paragraph'>Conoce la familia de productos <span className='paragraph-span-2'>Froilabo</span></p><br/>
                <div className="buttons-container">
                  <a href="https://techcomp-instruments.com/froilabo/?lang=es" target="_blank" className='btn'>Conoce más</a>
                  <a className='btn btn-primary' href="https://api.whatsapp.com/send?phone=5546208617&text=Hola,%20*¡Quiero%20cambiar%20mi%20ultracongelador!*" target="_blank">Solicitar información</a>
                </div>
              </div>
            
        </div>
      </div>
    </header>
  )
}

export default Header