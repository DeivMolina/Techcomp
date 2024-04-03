import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
  
  {
    id: 1,
    image: IMG1,
    tittle: 'Froilabo especializada en tecnologías de Ultra Baja Temperatura.',
    link: 'https://techcomp-instruments.com/froilabo/?lang=es',
  }
  ,
  {
    id: 2,
    image: IMG4,
    tittle: 'Precisa que ofrece una gama completa de soluciones de pesaje y metrología de alta precisión',
    link: 'https://techcomp-instruments.com/precisa/?lang=es',
  }
  ,
  {
    id: 3,
    image: IMG3,
    tittle: 'Scion Instruments B.V. expertos en cromatografía de gases, analizadores y espectrometría de masas de cuadrupolo simple.',
    link: 'https://techcomp-instruments.com/dynamica/?lang=es',
  }
  ,
  {
    id: 4,
    image: IMG2,
    tittle: 'Dynamica, que suministra una amplia gama de instrumentos analíticos y de laboratorio.',
    link: 'https://techcomp-instruments.com/dynamica/?lang=es',
  }
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