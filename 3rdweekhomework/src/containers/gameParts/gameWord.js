import React, { Component } from 'react';
import { connect } from 'react-redux';

class Word extends Component {

showGuess() {
  const word = this.props.word
  const guesses = this.props.guesses

     return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
   }

   render() {

    return(
      <h1>
      <p className="ShowGame">{this.showGuess()}</p>
      </h1>
    )
  }
}

function mapStateToProps(state) {
  return {
    word: state.currentWord,
    guesses: state.guesses
  };
}

export default connect(mapStateToProps)(Word)