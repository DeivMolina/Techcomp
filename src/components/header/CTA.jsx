import React from 'react'
import CV from '../../assets/cv.pdf'
import {BsWhatsapp} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://api.whatsapp.com//send?phone=5570081678" target="_blank" className='btn'><BsWhatsapp/> Whatsapp</a>
        <a className='btn btn-primary' href='tel:555570081678'>Llamanos</a>
    </div>
  )
}

export default CTA