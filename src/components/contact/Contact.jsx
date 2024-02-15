import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import AVTR5 from '../../assets/avatar5.jpg'
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
      <h5>Póngase en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">

        
      <form>
          <div className="input-row">
              <input type="text" name='name' placeholder='Nombre Completo' required />
              <input type="email" name="email" placeholder='Correo Electronico' required />
              
          </div>
          <input type="text" name='compania' placeholder='Compañía' required />
          <textarea name="message" rows="7" placeholder='Me gustaría tener un precio especial en este producto:' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>

        <div className="contact__options">
          <article className="contact__option">
          <div className="client__avatar">
                <img src={AVTR5} alt="" />
              </div>
            <h4>Javier Arzate</h4>
            <a href="https://api.whatsapp.com//send?phone=5570081678" target="_blank" className='btn'><BsWhatsapp/> Whatsapp</a> <br />
            <a className='btn btn-primary' href=''>Contactame</a>
          </article>
        </div>

      </div>
    </section>
  )
}

export default Contact