import React, { Component } from 'react';
import './App.css';
import NewGameButton from './containers/containerNewGameButton'
import {currentWord, imputArray} from './reducers/index'
import SearchBar from './containers/containerSearchLetter'
import ShowGame from './components/componentShowGameLogic'



class App extends Component {
  render() {
    return (
      <div className="App">
      <div>The word has been selected, now make your guess</div>
      <SearchBar />
      <ShowGame />
      <NewGameButton />
      </div>
    );
  }
}

export default App;
