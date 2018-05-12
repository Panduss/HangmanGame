import React, { Component } from 'react';
import './App.css';
import NewGameButton from './components/componentNewGameButton'
import currentWord from './reducers/index'
import Guesses from './components/componentLetterInput'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>The word has been selected, now make your guess</div>
      <Guesses />
      <NewGameButton />
      </div>
    );
  }
}

export default App;
