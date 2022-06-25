import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container"></div>
      <h5>Hello, my name is</h5>
      <h1>Kevin Foreman</h1>
      <h5 className="text-light">Full Stack Developer</h5>
    </header>
  )
}

export default Header