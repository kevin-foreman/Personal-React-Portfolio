import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download my resumé</a>
        <a href="#contact" className='btn btn-primary'>Click to message me</a>
    </div>
  )
}

export default CTA