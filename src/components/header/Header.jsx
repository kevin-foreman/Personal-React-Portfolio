import React from 'react'
import './header.css'
import CTA from './CTA'
import KEVIN from '../../assets/kevin-laptop-wave.png'
import SocialLinks from './SocialLinks'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello, my name is</h5>
      <h1>Kevin</h1>
      <h5 className="text-light">I'm a Full-stack Developer</h5>
      <CTA />
      <SocialLinks />

      <div className="kevin">
        <img src={KEVIN} alt="Kevin inside a laptop" />
      </div>
      </div>
    </header>
  )
}

export default Header