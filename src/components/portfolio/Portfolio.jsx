import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.png'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG11 from '../../assets/portfolio11.png'

const data = [
  // {
  //   id: 1,
  //   image: IMG14,
  //   tittle: 'ECHE <Web-Site />',
  //   github: 'https://github.com/DeivMolina',
  //   demo: 'https://eche.com.mx'
  // },
  // {
  //   id: 2,
  //   image: IMG13,
  //   tittle: 'BeFocused <Web-Site />',
  //   github: 'https://github.com/DeivMolina',
  //   demo: 'https://befocused.panduitlatam.com'
  // },
  // {
  //   id: 3,
  //   image: IMG12,
  //   tittle: 'Caña de Oro <Web-Site />',
  //   github: 'https://github.com/DeivMolina',
  //   demo: 'https://canadeoro.com.mx'
  // },
  {
    id: 4,
    image: IMG1,
    tittle: 'Froilabo especializada en tecnologías de Ultra Baja Temperatura.',
    link: 'https://techcomp-instruments.com/froilabo/?lang=es',
    github: 'https://github.com/DeivMolina',
    demo: 'https://asglasociados.com.mx'
  }
  ,
  
  {
    id: 5,
    image: IMG2,
    tittle: 'Dynamica, que suministra una amplia gama de instrumentos analíticos y de laboratorio.',
    link: 'https://techcomp-instruments.com/dynamica/?lang=es',
    github: 'https://github.com/DeivMolina',
    demo: 'https://inap.mx'
  },
  {
    id: 6,
    image: IMG3,
    tittle: 'Scion Instruments B.V. expertos en cromatografía de gases, analizadores y espectrometría de masas de cuadrupolo simple.',
    link: 'https://techcomp-instruments.com/dynamica/?lang=es',
    github: 'https://github.com/DeivMolina',
    demo: 'https://despachoatm.com'
  },
  {
    id: 7,
    image: IMG4,
    tittle: 'Precisa que ofrece una gama completa de soluciones de pesaje y metrología de alta precisión',
    link: 'https://techcomp-instruments.com/precisa/?lang=es',
    github: 'https://github.com/DeivMolina',
    demo: 'https://molina-consultores.com'
  }
  // {
  //   id: 8,
  //   image: IMG8,
  //   tittle: 'Grupo Inders <E-commerce />',
  //   github: 'https://github.com/DeivMolina',
  //   demo: 'https://inders.com.mx'
   
  // },
  // {
  //   id: 9,
  //   image: IMG11,
  //   tittle: 'Hydra Consultores <Web-site />',
  //   github: 'https://hydraconsultores.com.mx',
  //   demo: 'https://inders.com.mx'
   
  // },
  // {
  //   id: 10,
  //   image: IMG6,
  //   tittle: 'Planilla Dorada <Web-Site />',
  //   github: 'https://github.com/DeivMolina',
  //   // demo: 'http://planilla-dorada.com'
  // },
  // {
  //   id: 11,
  //   image: IMG7,
  //   tittle: 'Alearth <E-Commerce />',
  //   github: 'https://github.com/DeivMolina',
  //   // demo: 'https://www.dm-series.online'
  // },
  // {
  //   id: 12,
  //   image: IMG5,
  //   tittle: 'Law Soluciones Legales <Web-Site />',
  //   github: 'https://github.com/DeivMolina',
  //   // demo: 'https://www.lawsolucioneslegales.com'
  // },
  // {
  //   id: 13,
  //   image: IMG9,
  //   tittle: 'Bliblioteca UTN <Sistema de Inventario />',
  //   github: 'https://github.com/DeivMolina',
  //   // demo: 'https://www.dm-series.online'
  // },
  // {
  //   id: 14,
  //   image: IMG10,
  //   tittle: 'Reach QR <Sistema In:Out />',
  //   github: 'https://github.com/DeivMolina',
  //   // demo: 'https://www.dm-series.online'
  // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h3 className='title-portfolio'>Nuestras Compañías</h3>

      <div className="container portfolio__container">
        {
          data.map(({id, image,link, tittle, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <a target='_blank' href={link}>
                  <div className="portfolio__item-image">
                    <img src={image} alt={tittle} />
                  </div>
                </a>
                  <p dangerouslySetInnerHTML={{ __html: tittle }}></p>
                
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio