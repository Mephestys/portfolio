import React, { Component } from 'react';
import Background from './Components/Background/Background';
import Navigation from './Components/Navigation/Navigation';
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
              <p>I don't have an elevator pitch yet, so here's some random text for your enjoyment.</p>
            </section>
            <section className='App-section'>
              <h1 id="Projects">Projects</h1>
              <p>Should I be a carousel or a collection of images which are also links, or something else?</p>
            </section>
            <section className='App-section'>
              <h1 id="Skills">Skills</h1>
              <div className='App-skills-wrapper'>
                <div className='App-skills'>
                  <div className='App-skills-split'>
                    <li>HTML/CSS/JS</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Git</li>
                  </div>
                  <div className='divider' />
                  <div className='App-skills-split'>
                    <li>MongoDB</li>
                    <li>Django</li>
                    <li>Python</li>
                    <li>GraphQL</li>
                    <li>REST</li>
                  </div>
                </div>
              </div>
            </section>
            <section className='App-section'>
              <h1 id="Contact">Contact</h1>
              <p>I like the one with the sand.</p>
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
