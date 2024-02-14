import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/company/techcomp-scientific/" target="_blank"><BsLinkedin/></a>
      <a href="https://www.facebook.com/TechcompInstruments" target="_blank"><BsFacebook/></a>
      <a href="https://api.whatsapp.com//send?phone=5570081678" target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials