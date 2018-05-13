import React, { Component } from 'react';
import './App.css';
import NewGameButton from './containers/containerNewGameButton'
import {currentWord, imputArray} from './reducers/index'
import SearchBar from './containers/containerSearchLetter'
import ShowGame from './containers/containerShowUnderscores'
import WrongGuessCount from './containers/containerWrongGuessCount'


class App extends Component {
  render() {
    return (
      <div className="App">
      <div>The word has been selected, now make your guess</div>
      <SearchBar />
      <ShowGame />
      <WrongGuessCount />
      <NewGameButton />
      </div>
    );
  }
}

export default App;
