import React from 'react';

import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Projects from './components/projects/Projects';
import Skills from "./components/Skills/Skills";
import TopBar from "./components/topbar/TopBar";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <TopBar/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
