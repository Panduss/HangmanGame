import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameBoard extends Component {

showTries() {
    const letters = this.props.guesses
    
      return letters.join(', ')
  }

wrongGuessCount() {
  const word = this.props.word
  const guesses = this.props.guesses

      let wrongGuess = 0
      let rightGuess = 0
      wrongGuess = guesses.filter(guess => word.indexOf(guess) < 0).length
      rightGuess = guesses.length - wrongGuess
      
      console.log(wrongGuess, "wrong ones")
      console.log(rightGuess, "right guess")
      return wrongGuess
    }

isWinner () {
  const word = this.props.word
  const guesses = this.props.guesses
  const count = guesses.filter(guess => word.indexOf(guess) > 0).length
  return window.alert("hey, it's a hit!")
  console.log(count, "are these correct?")
  }

gameFinished () {
  const word = this.props.word
  const guesses = this.props.guesses
    return (this.wrongGuessLimit(word, guesses) || this.isWinner(word, guesses))
  }

 render() {

    return(
      <div>
      <p className="ShowGame">You tried: {this.showTries()}</p>
      <p className="ShowGame">Mistakes: {this.wrongGuessCount()}/6</p>
      {/* <p className="Winner">You did good! {this.isWinner()}</p>
      <p className="FinishGame">Game is over! {this.gameFinished()}</p> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    word: state.currentWord,
    guesses: state.guesses
  };
}

export default connect(mapStateToProps)(GameBoard)
