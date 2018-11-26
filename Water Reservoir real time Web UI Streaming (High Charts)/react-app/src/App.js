import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import SimpleMap from './components/simpleMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
              Water Reservoir real time Web UI Streaming
          </p>
          <SimpleMap/>

        </header>
      </div>
    );
  }
}

export default App;
