import React, { Component } from 'react';
import Background from './Components/Background/Background';
import Navigation from './Components/Navigation/Navigation';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Banner from './Images/banner.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Background />
          <Navigation />
          <img className="App-banner" src={Banner} alt="" />
          <div className="App-content">
            <section className='App-section'>
              <h1 id="About">About</h1>
              <p>My name is Daniel Abbott, and I like creating software.</p>
            </section>
            <section className='App-section'>
              <h1 id="Projects">Projects</h1>
              <Projects />
            </section>
            <section className='App-section'>
              <h1 id="Skills">Skills</h1>
              <h4>Full Stack Web Developer</h4>
              <div className='App-skills'>
                <div className='App-skills-split'>
                  <li>HTML/CSS/JS</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                </div>
                <div className='App-skills-split'>
                  <li>MongoDB</li>
                  <li>Mocha</li>
                  <li>Chai</li>
                  <li>Python</li>
                  <li>Django</li>
                </div>
                <div className='App-skills-split'>
                  <li>GraphQL</li>
                  <li>REST</li>
                  <li>Agile Workflow</li>
                  <li>Git Workflow</li>
                  <li>CI</li>
                </div>
              </div>
              <p style={{ "textAlign": "center" }}>... and more!</p>
            </section>
            <section className='App-section'>
              <h1 id="Contact">Contact</h1>
              <Contact />
            </section>
          </div>
        </div>
        <footer>
          (C) 2018 Daniel Abbott
        </footer>
      </div>
    );
  }
}

export default App;
