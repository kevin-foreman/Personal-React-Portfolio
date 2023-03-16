import React from 'react'
import resume from '../../assets/kevin-foreman-cv'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download my resumé</a>
        <a href="#contact" className='btn'>Message me here</a>
    </div>
  )
}

export default CTA