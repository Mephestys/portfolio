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
              <div className='App-skills-wrapper'>
                <div className='App-skills'>
                  <div className='App-skills-split'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </div>
                  <div className='divider' />
                  <div className='App-skills-split'>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>GraphQL</li>
                  </div>
                  <div className='divider' />
                  <div className='App-skills-split'>
                    <li>REST</li>
                    <li>Jest</li>
                    <li>LESS</li>
                    <li>Git</li>
                    <li>CI</li>
                  </div>
                </div>
              </div>
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
