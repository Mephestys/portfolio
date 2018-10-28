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
            <h1>About</h1>
            <p>I don't have an elevator pitch yet, so here's some random text for your enjoyment.</p>
          </section>
          <section className='App-section'>
            <h1>Projects</h1>
            <p>Should I be a carousel or a collection of images which are also links, or something else?</p>
          </section>
          <section className='App-section'>
            <h1>Skills</h1>
            <p>Maybe draw in some neat icons or some crap like that.</p>
          </section>
          <section className='App-section'>
            <h1>Contact</h1>
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
