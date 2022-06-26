import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My projects</h5>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3>Project Title</h3>
            <a href="https://github.com/kevin-foreman/Coffee-Shop-" className='btn' target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://coffee-from-the-world.herokuapp.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Live link</a>

          </div>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio