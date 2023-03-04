import React from 'react';
import './intro.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Intro() {
  return (
    <div className='intros' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me2.jpg" alt="" />
          <div className='cicons'>
            CONNECT WITH ME
          </div>
          <div className='socialIcons'>
            <a href="https://www.linkedin.com/in/abhiruchi-sarswat-00b913227"><FaLinkedinIn className='icc' />  </a>
            <a href="https://instagram.com/abhiruchisarswat?igshid=YmJhNjkzNzY="><FaInstagram className='icc' /> </a>
            <a href="https://github.com/abhi03ruchi"><FaGithub className='icc' /></a>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="wrappers" >
          <h2> Hi There , I'm </h2>
          <h1 className='h1s'> Abhiruchi Sarswat</h1>
          <hr />
          <div className='para'>A computer science student specializing in AI, also skilled in Java programming and front-end web development. My interests lie in creating stunning websites and exploring the potential of Machine Learning and Blockchain technology.</div>
          <a href='https://drive.google.com/file/d/124GUmgm7Pv9ZrMK5HbPocma6P1CO6wQ2/view?usp=share_link' className='resumee'> DOWNLOAD RESUME </a>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
