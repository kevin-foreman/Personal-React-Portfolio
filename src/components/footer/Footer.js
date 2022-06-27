import React from 'react'
import './footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="https://masterflex.tech" className='footer__logo'>MasterFlex.Tech</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://twitter.com"><FaTwitter/></a>
        <a href="https://twitch.com"><FaTwitch/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <div className='footer__copyright'>
          <small>&copy; MasterFlex.Tech</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer