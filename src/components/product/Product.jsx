import React from 'react'
import './product.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IMG1 from '../../assets/products/ultracongelador-evolution-690-L-friolabo-techcomp-latino-2024.png'
import IMG2 from '../../assets/products/ultracongelador-evolution-690-L-promociones-friolabo-techcomp-latino.webp'
import IMG3 from '../../assets/products/ultracongelador-trust-340-L-friolabo-techcomp-latino-2024.png'
import IMG4 from '../../assets/products/ultracongelador-trust-515-L-friolabo-techcomp-latino-2024.png'
import IMG5 from '../../assets/products/ultracongelador-TRUST-690-L-promociones-friolabo-techcomp-latino.webp'
import IMG6 from '../../assets/products/horno-de-conveccion-forzada-Air-performance-60-L-friolabo-techcomp-latino-2024.png'
import IMG7 from '../../assets/products/horno-de-conveccion-forzada-Air-performance-120-L-friolabo-techcomp-latino-2024.png'
import IMG8 from '../../assets/products/horno-de-conveccion-forzada-Air-performance-240-L-friolabo-techcomp-latino-2024.png'
import IMG9 from '../../assets/products/incubadora-de-conveccion-forzada-bio-expert-60-L-friolabo-techcomp-latino-2024.png'
import IMG10 from '../../assets/products/incubadora-de-conveccion-forzada-bio-expert-120-L-friolabo-techcomp-latino-2024.png'
import IMG11 from '../../assets/products/Incubadora-de-conveccion-forzada-bio-expert-240-L-promociones-friolabo-techcomp-latino.webp'
import IMG12 from '../../assets/products/Balanza-de-precisión-BJ-2100-D-friolabo-techcomp-latino-2024.png'
import IMG13 from '../../assets/products/horno-de-conveccion-forzada-Air-Expert-60-L-friolabo-techcomp-latino-2024.png'
import IMG14 from '../../assets/products/Horno-Conveccion-Forzada-Air-Expert-240-L-promociones-friolabo-techcomp-latino.webp'


const data = [
    
    {
      id: 2,
      image: IMG2,
      title: 'Ultracongelador EVOLUTION 690 L',
      bullets: [
        'Capacidad de 690 L (24.3 Pies)',
        'Control de temperatura de -60 °C a -86 ° C',
        'Pantalla Táctil a Color con alarma visual y audible',
        'Sistema exclusivo BoSS® de prevención contra descargas eléctricas',
        'Paneles de Cryo preservación Integrado con autonomía de 6 horas',
        'Incluye 3 bandejas de acero inoxidable, 1 filtro contra polvo y 1 espátula de remoción de escarcha',
        'Garantía de 2 años en general, 5 años en compresores y 10 años en sistema de aislamiento al vacio VIP®',
        'Incluye gastos de envío a la CDMX y Área Metropolitana*',
      ]
    }
   
    ,
    {
      id: 5,
      image: IMG5,
      title: 'Ultracongelador TRUST 690 L',
      bullets: [
        'Capacidad de 690 L (24.3 Pies)',
        'Control de temperatura de -60 °C a -86 ° C',
        'Display dual digital LCD con alarma visual y audible',
        'Incluye 3 bandejas de acero inoxidable, 1 filtro contra polvo y 1 espátula de remoción de escarcha',
        'Garantía de 2 años en general, 5 años en compresores y 10 años en sistema de aislamiento al vacio VIP®',
      ]
    }
 
    ,
    {
      id: 10,
      image: IMG14,
      title: 'Horno de Convección Forzada Air Expert 240 L',
      bullets: [
        'Capacidad de 230 L',
        'Control de temperatura ambiente + 10 °C a 250 °C y precisión 0.1 °C.',
        'Sistema interno de optimización de espacio de bandejas OS®',
        'Display dual digital LCD',
        'Diseño de cierre de cierre de puertas Hands Free®',
        'Puerto para validación y calificación (IQ/OQ)',
        'Garantía de 2 años en general',
      ]
    }
  
    ,
    {
      id: 13,
      image: IMG11,
      title: 'Incubadora de Convección ForzadaBio Expert 240 L',
      bullets: [
        'Capacidad de 114 L',
        'Control de temperatura ambiente + 5 °C a 100 °C y precisión 0.1 °C.',
        'Sistema interno de optimización de espacio de bandejas OS®',
        'Display dual digital LCD',
        'Diseño de cierre de cierre de puertas Hands Free®',
        'Sistema exclusivo de descontaminación térmica',
        'Garantía de 2 años en general',
      ]
    }

      // ,
    // {
    //   id: 11,
    //   image: IMG9,
    //   title: 'Incubadora de Convección ForzadaBio Expert 60 L',
    //   bullets: [
    //     'Capacidad de 56 L',
    //     'Control de temperatura ambiente + 5°C a 100 °C y precisión 0.1 °C.',
    //     'Display dual digital LCD',
    //     'Sistema exclusivo de descontaminación térmica por calor seco a 160 ° C'
    //   ]
    // }
    // ,
    // {
    //   id: 12,
    //   image: IMG10,
    //   title: 'Incubadora de Convección ForzadaBio Expert 120 L',
    //   bullets: [
    //     'Capacidad de 114 L',
    //     'Control de temperatura ambiente + 5°C a 100 °C y precisión 0.1 °C.',
    //     'Display dual digital LCD',
    //     'Sistema exclusivo de descontaminación térmica por calor seco a 160 ° C'
    //   ]
    // }
       // ,
    // {
    //   id: 4,
    //   image: IMG4,
    //   title: 'Ultracongelador TRUST 515 L',
    //   bullets: [
    //     'Capacidad de 515 L (18.1 Pies)',
    //     'Display dual digital LCD con alarma visual y audible',
    //     'Incluye 1 bandeja de acero inoxidable, 1 filtro contra polvo & 1 espátula de remoción de escarcha.',
    //     'Garantía de 2 años en general, 5 años en compresores y 10 años en sistema de aislamiento al vacio VIP®'
    //   ]
    // }
    // ,
    // {
    //   id: 3,
    //   image: IMG3,
    //   title: 'Ultracongelador TRUST 340 L',
    //   bullets: [
    //     'Capacidad de 340 L (12 Pies)',
    //     'Display dual digital LCD con alarma visual y audible',
    //     'Incluye 1 bandeja de acero inoxidable, 1 filtro contra polvo & 1 espátula de remoción de escarcha.',
    //     'Garantía de 2 años en general, 5 años en compresores y 10 años en sistema de aislamiento al vacio VIP®'
    //   ]
    // }
    // ,
    // {
    //   id: 6,
    //   image: IMG6,
    //   title: 'Horno de Convección Forzada Air Performance 60 L',
    //   bullets: [
    //     'Capacidad de 56 L',
    //     'Control de temperatura ambiente + 10°C a 250 °C y precisión 0.1 °C.',
    //     'Display dual digital LCD',
    //     'Diseño de cierre de puertas Hands Free®'
    //   ]
    // }
    // ,
    // {
    //   id: 7,
    //   image: IMG7,
    //   title: 'Horno de Convección Forzada Air Performance 120 L',
    //   bullets: [
    //     'Capacidad de 116 L',
    //     'Control de temperatura ambiente + 10°C a 250 °C y precisión 0.1 °C.',
    //     'Display dual digital LCD',
    //     'Diseño de cierre de puertas Hands Free®'
    //   ]
    // }
    // ,
    // 
     // ,
    // {
    //   id: 1,
    //   image: IMG1,
    //   title: 'Ultracongelador EVOLUTION 690 L',
    //   bullets: [
    //     'Capacidad de 690 L (24.3 Pies)',
    //     'Pantalla Táctil a Color con alarma visual y audible',
    //     'Sistema exclusivo BoSS® de prevención contra descargas eléctricas',
    //     'Garantía de 2 años en general, 5 años en compresores y 10 años en sistema de aislamiento al vacio VIP®'
    //   ]
    // }
    ,
    // {
    //   id: 1,
    //   image: IMG12,
    //   title: 'Balanza BJ2100D',
    //   bullets: [
    //     'Capacidad de 2 100 g',
    //     'Precisión de 0.1 g',
    //     '4 teclas de tara',
    //     '2 años de garantía'
    //   ]
    // },

    
  ]

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Cuando el ancho de la pantalla es igual o menor a 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600, // Cuando el ancho de la pantalla es igual o menor a 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div >
      <section id='product' style={{marginTop:'5rem'}}>
        <h3 className='title-product'>Lo que buscas está en stock… ¡y con precio especial!</h3>
        <div className="container product__container">
          <Slider {...settings}>
            {
              data.map(({id, image, title, bullets}) => {
                 // Separamos bullets normales (para lista) vs notas/espacios
                  const listItems = bullets.filter(
                    (b) => b !== "&nbsp;" && !String(b).trim().startsWith("<em")
                  );
                  const notes = bullets.filter((b) => String(b).trim().startsWith("<em"));

                return (
                  <article key={id} className="product__item">
                <div className="product__item-image">
                  <img src={image} alt={title} />
                </div>

                <p className="product__title" dangerouslySetInnerHTML={{ __html: title }} />

                {/* Lista bien hecha */}
                <ul className="bullets">
                  {listItems.map((bullet, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: bullet }} />
                  ))}
                </ul>

                {/* Notas (sin viñeta) */}
                {notes.map((n, i) => (
                  <p key={i} className="bullet-note" dangerouslySetInnerHTML={{ __html: n }} />
                ))}

                {/* Botón al final */}
                <div className='flex justify-center pt-10'>
                <a href="#contact" className="btn btn-primary">
                  Quiero Precio especial
                </a>
                </div>
              </article>
                )
              })
            }
          </Slider>
        </div>
      </section>
      <div className='pt-15 pb-15'>
        <h4 className='subtitle-product'>Incluye precios más IVA <br/> Gastos de envío a la CDMX y Área Metropolitana *</h4>
        <p className='paragraph-product'><em>*Consultar con su ejecutivo otras ciudades disponibles</em></p>
      </div>
    </div>
    
  )
}

export default Product