import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { SiAboutdotme } from 'react-icons/si'
import { SiAtom } from 'react-icons/si'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { AiOutlineContacts } from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#home"><FaHome /></a>
      <a href="#about"><SiAboutdotme /></a>
      <a href="#experience"><SiAtom /></a>
      <a href="#portfolio"><AiTwotoneFolderOpen /></a>
      <a href="#contact"><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav