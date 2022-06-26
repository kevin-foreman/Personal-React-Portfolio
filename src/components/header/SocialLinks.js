import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

// links to my social media accounts
const SocialLinks = () => {
  return (
    <div className="social__links">
        <a href="https://www.twitter.com/MasterFlexTech" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://www.github.com/kevin-foreman" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/kevin-o-foreman2" target="_blank" rel="noreferrer"><FaLinkedin /></a>


    </div>
  )
}

export default SocialLinks