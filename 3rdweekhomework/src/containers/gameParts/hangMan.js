import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './hangman.css'

class HangedMan extends PureComponent {

showPic() {
    const word = this.props.word
    const guesses = this.props.guesses

    const count = guesses.filter(guess => word.indexOf(guess) < 0).length

    if (count === 0) {
        return <img src='https://i.imgur.com/Ns7s0nv.jpg' alt="hangman start"/>
        }

    if (count === 1 ) {
        return <img src='https://i.imgur.com/SRxADu7.jpg' alt="hangman, 1 mistake"/>
        }

    if( count === 2 ) {
        return <img src='https://i.imgur.com/sW1i8GL.jpg' alt="hangman, 2 mistakes"/>
        }

    if( count === 3 ) {
        return <img src='https://i.imgur.com/i6QCGRy.jpg' alt="hangman, 3 mistakes"/>
        }

    if ( count === 4 ) {
        return <img src='https://i.imgur.com/OWyZvqm.jpg' alt="hangman, 4 mistakes"/>
        }
    
    if ( count === 5 ) {
        return <img src='https://i.imgur.com/prfHoGK.jpg' alt="hangman, 5 mistakes"/>
        }
    
    if( count === 6 ) {
        return <img src='https://i.imgur.com/tuBz9Cq.jpg' alt="game over!"/>
        }
}


render() {

    return (
            <div className="leftBox">
                <div>{this.showPic()}</div>
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

export default connect(mapStateToProps)(HangedMan)
