import React from 'react'
import './portfolio.css'
import COFFEE from '../../assets/world-coffee-shop.png'
import SUDOKU from '../../assets/cool-sudoku-screenshot.png'
import TECH from '../../assets/work-img-01.png'
import BUDGET from '../../assets/budget-tracker.png'
import README from '../../assets/readme-generator.png'
import MORETOCOME from '../../assets/kevin-equation-meme.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My projects</h5>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={COFFEE} alt="Coffe shop" />
            <h3>Coffee Shop</h3>
            <a href="https://github.com/kevin-foreman/Coffee-Shop-" className='btn' target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://coffee-from-the-world.herokuapp.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Live link</a>

          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SUDOKU} alt="Sudoku game" />
            <h3>Cool Sudoku App</h3>
            <a href="https://github.com/kevin-foreman/cool-sudoku" className='btn' target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://kevin-foreman.github.io/cool-sudoku/" className='btn btn-primary' target="_blank" rel="noreferrer">Live link</a>

          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={TECH} alt="Coffe shop" />
            <h3>Master Flex Tech</h3>
            <a href="https://github.com/kevin-foreman/MasterFlex-Tech" className='btn' target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://masterflex.tech/" className='btn btn-primary' target="_blank" rel="noreferrer">Live link</a>

          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={BUDGET} alt="Coffe shop" />
            <h3>Budget tracker</h3>
            <a href="https://github.com/kevin-foreman/progressive-budget-tracker" className='btn' target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://advanced-pwa-budget-tracking.herokuapp.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Live link</a>

          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={README} alt="Coffe shop" />
            <h3>Readme generator</h3>
            <a href="https://github.com/kevin-foreman/README-Generator" className='btn' target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://drive.google.com/file/d/16RsiCHavyyjKZF0O3JKCBwgSCcX0-tbO/view" className='btn btn-primary' target="_blank" rel="noreferrer">Live demo</a>

          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={MORETOCOME} alt="Coffe shop" />
            <h3>More to come...</h3>
            <a href="https://github.com/kevin-foreman" className='btn' target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://github.com/kevin-foreman" className='btn btn-primary' target="_blank" rel="noreferrer">Live link</a>

          </div>
          
        </article>

      </div>
    </section>
  )
}

export default Portfolio