import React, { Component } from 'react';
import './App.css';
import NewGameButton from './containers/containerNewGameButton'
import {currentWord, imputArray} from './reducers/index'
import SearchBar from './containers/containerSearchLetter'
import GameOver from './containers/containerGameLogic'


class App extends Component {
  render() {
    return (
      <div className="App">
      <div>The word has been selected, now make your guess</div>
      <SearchBar />
      <GameOver />
      <NewGameButton />
      </div>
    );
  }
}

export default App;
