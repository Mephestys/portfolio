import React, { Component } from 'react';
import Background from './Components/Background/Background'
import Navigation from './Components/Navigation/Navigation'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Navigation />
        <header className="App-header">
        <h1>This is a test</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <section>
        <footer>
          (C) 2018 Daniel Abbott
        </footer>
        </section>
      </div>
    );
  }
}

export default App;
