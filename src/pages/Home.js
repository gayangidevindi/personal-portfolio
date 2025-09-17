import React from 'react'
import "./Home.css"
import About from './About';

export default function Home() {
  return (
    <div>
      <div className='intro'>
        <h1>
          Hi, I’m <span className="highlight">Gayangi Devindi</span>
        </h1>
        <h3 className="typewriter">
          Developer | Innovator | Tech Enthusiast
        </h3>
        <h4>
          I design and build solutions that bring ideas to life — 
          from IoT systems to modern web apps — blending 
          <span className="highlight2"> creativity </span> with 
          <span className="highlight2"> technology</span>.
        </h4>


      </div>

      <About /> 
    </div>
  );
}
