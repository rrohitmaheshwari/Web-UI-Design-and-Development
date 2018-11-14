import React, { Component } from 'react';
import './App.css';
import Stepper from './components/stepper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <Stepper/>
        </header>
      </div>
    );
  }
}

export default App;
