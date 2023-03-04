import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import {  useState } from "react";


export default function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1p1b6p1', 'template_qpjxx0f', formRef.current, 'gZl-UDen4F9L2h8Eq')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className='c' id='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        {/* <div className="c-left"></div> */}
        <div className="c-right">
          <h1 className="c-desc">
            Get in touch.
          </h1>
          <form ref={formRef} onSubmit = {handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank You..."}
          </form>
        </div>
      </div>
      <div className='block'> </div>
    </div>
  )
}
