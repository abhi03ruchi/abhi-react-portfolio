import React from 'react';
import './Topbar.css';
export default function TopBar() {
  return (
    <div className='top'>
      <div className='wrapper'>
        <div className='left'>
          <a href="#intro" className='logo'>ABHIRUCHI SARSWAT</a>
        </div>
        <div className='right'>
          <div className="itemContainer">
            <a href="#projects" className='textD'> Projects</a>
          </div>
          <div className="itemContainer">
            <a href="#skills" className='textD'> Skills</a>
          </div>
          <div className="itemContainer">
            <a href="#contact" className='textD'> Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}
