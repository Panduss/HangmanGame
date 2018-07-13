import React, {Component} from 'react';
import alphabet from '../../lib/alphabet'
import {makeGuess} from '../../actions/game'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './hangman.css'

class SearchBar extends Component {

  handleBtnClick(letter) {
    this.props.makeGuess(letter);
  }

  render() {
    return (
      <div>
      {alphabet.map( (letter, index) =>
          <button 
              className="keyboard"
              type="button"
              key={index}
              onClick={() => this.handleBtnClick(letter)}
              disabled={this.props.guesses.includes(letter)}
              >
              {letter}
          </button>
      )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  guesses: state.guesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ makeGuess }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)