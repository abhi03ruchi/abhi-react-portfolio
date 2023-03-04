import React from 'react';

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import './skill.css';

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className='contains'>
        <h1> My SkillSets</h1>
        <div className="skillTitle">
          <div className="wrapper">
            <FaReact className='icons' />
          </div>

          <div className="wrapper">
            <FaHtml5 className='icons' />
          </div>

          <div className="wrapper">
            <FaCss3Alt className='icons' />
          </div>
          <div className="wrapper">
            <FaBootstrap className='icons' />
          </div>
          <div className="wrapper">
            <FaPython className='icons' />
          </div>

        </div>
      </div>
    </div>
  )
}
