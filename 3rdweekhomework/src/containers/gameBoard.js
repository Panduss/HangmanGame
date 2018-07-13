import React, { Component } from 'react';
import NewGameButton from './gameParts/newGameButton'
import SearchBar from './gameParts/searchLetter'
import GameBoard from './gameParts/logic'
import Word from './gameParts/gameWord'
import HangedMan from './gameParts/hangMan'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class Game extends Component {
  render() {
    return (
      <Paper className="container">
      <h1>HANGMAN</h1>
      <Word className="randomWord"/>
      <Grid container spacing={24}>

          <Grid item xs>
              <HangedMan />
          </Grid>

          <Grid item xs>
              <SearchBar />
              <GameBoard />    
          </Grid>

      </Grid>
      <NewGameButton />
      </Paper>
    );
  }
}