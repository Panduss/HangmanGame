import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class Guesses extends PureComponent {

    Guess = () => {
     this.props.makeGuess()
   }

    render() {
        return(
          <form>
          <input className="newGuess" />
          <button
            onClick={this.Guess.bind(this)}
            className="newGuess"
            >
            Submit
          </button>
          </form>
        )
      }
  }

  export default connect(null, {makeGuess})(Guesses)
