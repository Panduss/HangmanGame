import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameOver extends Component {

showGuess() {
  const word = this.props.word
  const guesses = this.props.guesses

     return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
   }

showTries() {
    const letters = this.props.guesses
    
      return letters.join(', ')
  }

wrongGuessCount() {
  const word = this.props.word
  const guesses = this.props.guesses

      return guesses.filter(guess => word.indexOf(guess) < 0).length
    }


wrongGuessLimit () {
  const word = this.props.word
  const guesses = this.props.guesses
    return guesses.filter(guess => word.indexOf(guess) < 0).length >= 6
  }

isWinner () {
  const word = this.props.word
  const guesses = this.props.guesses
    return this.showGuess(word, guesses) === word.split('').join(' ')
  }

gameFinished () {
  const word = this.props.word
  const guesses = this.props.guesses
    return (this.wrongGuessLimit(word, guesses) || this.isWinner(word, guesses))
  }

 render() {

    return(
      <div>
      <p className="ShowGame">The word: {this.showGuess()}</p>
      <p className="ShowGame">You tried: {this.showTries()}</p>
      <p className="ShowGame">Mistakes: {this.wrongGuessCount()}/6</p>
      <p className="Winner">You did good! {this.isWinner()}</p>
      <p className="FinishGame">Game is over! {this.gameFinished()}</p>
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

export default connect(mapStateToProps)(GameOver)
