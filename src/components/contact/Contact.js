import React, { useRef } from 'react';
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaTwitter } from 'react-icons/fa'
import { BsSignal } from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qgnj9dc', 'template_psiltal', form.current, 'tS2-ZUXhwDJo_GkZu')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2>How to reach me</h2>
      <h5>Use a link, or fill out the form below!</h5>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kevin@gmail.com</h5>
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="8" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact