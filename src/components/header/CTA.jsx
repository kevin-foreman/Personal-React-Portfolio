import React from 'react'
import resume from '../../assets/resume.pdf'

const callToAction = () => {
  return (
    <div className='ac'>
        <a href={resume} download>Download resumé</a>
        <a href="#contact">Message me</a>
    </div>
  )
}

export default callToAction