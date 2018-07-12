import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './hangman.css'

class HangedMan extends PureComponent {

showPic() {
    const word = this.props.word
    const guesses = this.props.guesses

    const count = guesses.filter(guess => word.indexOf(guess) < 0).length

    if (count === 0) {
        return <img src='https://i.imgur.com/Ns7s0nv.jpg' />
        }

    if (count === 1 ) {
        return <img src='https://i.imgur.com/SRxADu7.jpg' />
        }

    if( count === 2 ) {
        return <img src='https://i.imgur.com/sW1i8GL.jpg' />
        }

    if( count === 3 ) {
        return <img src='https://i.imgur.com/i6QCGRy.jpg' />
        }

    if ( count === 4 ) {
        return <img src='https://i.imgur.com/OWyZvqm.jpg' />
        }
    
    if ( count === 5 ) {
        return <img src='https://i.imgur.com/prfHoGK.jpg' />
        }
    
    if( count === 6 ) {
        return <img src='https://i.imgur.com/tuBz9Cq.jpg' />
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
