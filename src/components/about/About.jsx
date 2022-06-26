import React from 'react'
import './about.css'
import hmmm from '../../assets/kevin-hmmm.png'
import { GiProgression } from 'react-icons/gi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { VscFolder } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h2>At a glance</h2>
      <div className='container about__container'>
        <div className="about__me">
        <div className="about__me-image">
          <img src={hmmm} alt="Curious Kevin" />
        </div>
        </div>
        <div className="about__content">
        <div className="about__cards">

          <article className="about__card">
            <GiProgression className="about__icon" />
            <h5>Experience</h5>
            <small>'Developing'</small>
          </article>

          <article className="about__card">
            <BsFillPersonLinesFill className="about__icon" />
            <h5>Customers</h5>
            <small>Coming soon</small>
          </article>

          <article className="about__card">
            <VscFolder className="about__icon" />
            <h5 href='#portfolio' className='btn'>Projects</h5>
            <small>30+ Completed</small>
          </article>

        </div>
        <p>
          I'm an aspiring web developer, and ispired by all things tech!
          I've been working with computers for 20+ years and decided to begin
          coding so I could have a flexible work life.
          I am recently retired from the U.S. Army after 21+ years of humble
          service to the nation. Contact me today to see if we would be a good
          fit, I love to collaborate!
        </p>
        <a href="#contact" className='btn'>Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default About