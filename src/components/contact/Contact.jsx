import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import AVTR5 from '../../assets/Techomp_javier_arzate.png'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dw2iep9', 'template_00bsoer', form.current, 'PLVe2mPiaHGqH25Tp')
     
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h3 className='title-contact'>Póngase en contacto</h3>
      <h2 >Estamos para servirle</h2><br />

      <div className="container contact__container">

        
      <form>
          <div className="input-row">
              <input type="text" name='name' placeholder='Nombre Completo' className='placeholder' required />
              <input type="email" name="email" placeholder='Correo electrónico' className='placeholder' required />
              
          </div>
          <input type="text" name='compania' placeholder='Empresa' className='placeholder' required />
          <textarea name="message" rows="7" placeholder='Me gustaría tener un precio especial en este producto:' className='placeholder' required></textarea>
          <button type='submit' className='btn-secondary'>Enviar</button>
      </form>

        <div className="contact__options">
          <article className="contact__option">
          <div className="client__avatar">
                <img src={AVTR5} alt="" />
              </div>
            <h4>Javier Arzate</h4>
            <a href="https://api.whatsapp.com/send?phone=5546208617&text=Hola,%20*¡Quiero%20cambiar%20mi%20ultracongelador!*" target="_blank" className='btn-wts'><BsWhatsapp/> Whatsapp</a> <br />
            <a className='btn btn-primary' href='tel:5570081678'>Contáctame</a>
          </article>
        </div>

      </div>
    </section>
  )
}

export default Contact