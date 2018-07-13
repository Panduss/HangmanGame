import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert'
import { newGame } from '../../actions/game'

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
    let rightGuess = 0

    wrongGuess = guesses.filter(guess => word.indexOf(guess) < 0).length
    rightGuess = guesses.length - wrongGuess
    console.log(wrongGuess, "wrong ones")
    console.log(rightGuess, "right guess")
    if(wrongGuess<6) {
      return wrongGuess
    } 

    if( rightGuess === word.length ) {
      swal("Awesome! You did it!", {
          icon: "success",
        });

      }
    
    if( rightGuess === word.length ) {
        swal( 'Ooops!', "You haven't got any tries left!", "error")
  
        }
  }

 render() {

    return (
      <div>
      <p className="ShowGame">You've got {6 - this.wrongGuessCount() || 0 } more tries</p>
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

export default connect(mapStateToProps, {newGame})(GameBoard)