import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert'
import {finishGame} from '../../actions/game'


class Word extends Component {
  constructor(props) {
    super(props);

this.state = {
  gameOver: false,
  };
}

showGuess() {
  const word = this.props.word
  const guesses = this.props.guesses
  const gameOver = this.props.gameOver

  const randomWord =  word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ")


  if( randomWord.indexOf('_') < 0 ) {
    swal("Awesome! You figured it out!", {
        icon: "success",
      })
      this.props.finishGame()
    }

  if(gameOver === true) {
    return word
  }


     console.log(randomWord, "randomWord")
     return randomWord
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
    guesses: state.guesses,
    gameOver: state.gameOver
  };
}

// const mapDispatchToProps = {
//   finishGame
// }

export default connect(mapStateToProps, {finishGame})(Word)