import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert'
import { newGame, finishGame } from '../../actions/game'

class GameBoard extends Component {

startGame = () => {
    this.props.newGame()
  }

showTries() {
    const letters = this.props.guesses
      return letters.join(', ')
  }

wrongGuessCount() {
    const word = this.props.word
    const guesses = this.props.guesses
    let wrongGuess = 0

    wrongGuess = guesses.filter(guess => word.indexOf(guess) < 0).length
    
    if( wrongGuess < 6 ) {
      return wrongGuess
    } else {
        this.props.finishGame()
        return swal( 'Ooops!', "You are dead.", "error")
    }
  }

 render() {
   const {gameOver} = this.props

   console.log(gameOver, "game is over?")
    
    if(gameOver === true) {
        return (
          <div>
            <p> Game is over! </p>
          </div>
        )
    } else {
      return (
        <div>
        <p className="ShowGame">You've got {6 - this.wrongGuessCount() || 0 } more tries! </p>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    word: state.currentWord,
    guesses: state.guesses,
    gameOver: state.gameOver
  };
}

export default connect(mapStateToProps, {newGame, finishGame})(GameBoard)