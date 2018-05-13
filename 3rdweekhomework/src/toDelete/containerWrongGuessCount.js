import React, { Component } from 'react';
import { connect } from 'react-redux';

class WrongGuess extends Component {

wrongGuessCount() {
  const word = this.props.word
  const guesses = this.props.guesses

    return guesses.filter(guess => word.indexOf(guess) < 0).length
  }

 render() {

    return(
      <div>
      <p className="ShowGame">Mistakes: {this.wrongGuessCount()}/6</p>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    word: state.currentWord,
    guesses: state.inputArray
  };
}

export default connect(mapStateToProps)(WrongGuess)
