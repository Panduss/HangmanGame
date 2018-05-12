import React, { Component } from 'react';
import './App.css';
import NewGameButton from './components/componentNewGameButton'


class App extends Component {
  render() {
    return (
      <div className="App">
      <NewGameButton />
      </div>
    );
  }
}

export default App;
