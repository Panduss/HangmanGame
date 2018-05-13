import { connect } from 'react-redux';
import makeGuess from '../actions/game';
import {Component} from 'react';

class GameLogic extends Component {

//  showGuess = (word, guesses) => {
//   return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
//   console.log(word)
// }
//
// export const wrongGuessCount = (word, guesses) => {
//   return guesses.filter(guess => word.indexOf(guess) < 0).length
// }
//
// export const wrongGuessLimit = (word, guesses) => {
//   return guesses.filter(guess => word.indexOf(guess) < 0).length >= 6
// }
//
// export const isWinner = (word, guesses) => {
//   return showGuess(word, guesses) === word.split('').join(' ')
// }
//
// export const gameFinished = (word, guesses) => {
//   return (wrongGuessLimit(word, guesses) || isWinner(word, guesses))
// }

}


function mapStateToProps(state) {
  return {
    word: state.currentWord,
    guesses: state.inputArray
  };
}

export default connect(mapStateToProps)(GameLogic)
