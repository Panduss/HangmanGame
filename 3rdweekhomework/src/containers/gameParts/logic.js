import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert'

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
    if(wrongGuess<6) {
      return wrongGuess
    } else {
      return swal("Oops", "Something went wrong!", "error")
      }
    }

 render() {

    return (
      <div>
      <p className="ShowGame">You've got {6 - this.wrongGuessCount()} more tries</p>
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