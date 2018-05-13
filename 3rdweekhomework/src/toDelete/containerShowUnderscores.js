import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShowGame extends Component {

showGuess() {
const word = this.props.word
const guesses = this.props.guesses

   return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
 }

 render() {

    return(
      <div>
      <p className="ShowGame">The word: {this.showGuess()}</p>
      <p className="ShowGame">You tried: {this.props.guesses}</p>
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

export default connect(mapStateToProps)(ShowGame)
