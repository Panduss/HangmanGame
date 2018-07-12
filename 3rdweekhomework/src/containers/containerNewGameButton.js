import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'

class NewGameButton extends PureComponent {

  startGame = () => {
   this.props.newGame()
 }

  render() {
      return(
        <button
          onClick={this.startGame.bind(this)}
          className="newGame"
          >
          New game!
        </button>
      )
    }
}

export default connect(null, {newGame})(NewGameButton)
