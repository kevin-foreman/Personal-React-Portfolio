import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaTwitter } from 'react-icons/fa'
import { BsSignal } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>How to reach me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kevin.o.foreman2@gmail.com</h5>
            <a href="mailto:kevin.o.foreman2@gmail.com" target="_blank" rel="noreferrer">Email me</a>
          </article>

          <article className="contact__option">
            <FaTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@MasterFlexTech</h5>
            <a href="https://www.twitter.com/MasterFlexTech" target="_blank" rel="noreferrer">@Me</a>
          </article>

          <article className="contact__option">
            <BsSignal className='contact__option-icon'/>
            <h4>Signal App</h4>
            <h5>210-760-5998</h5>
            <a href="https://api.signalapp.com/send?phone=12107605998" target="_blank" rel="noreferrer">Message me</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="8" placeholder='Your message' required></textarea>
          <button type='submit' className='btn-btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact