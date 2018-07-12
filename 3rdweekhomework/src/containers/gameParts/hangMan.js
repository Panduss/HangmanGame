import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './hangman.css'


class HangedMan extends PureComponent {

showPic() {
    const {guesses} = this.props.guesses

    if (this.props.guesses.length === 0) {
        return <img src='https://i.imgur.com/Ns7s0nv.jpg' />
        }

    if (this.props.guesses && this.props.guesses.length === 1 ) {
        return <img src='https://i.imgur.com/SRxADu7.jpg' />
        }

    if( this.props.guesses && this.props.guesses.length === 2 ) {
        return <img src='https://i.imgur.com/sW1i8GL.jpg' />
        }

    if( this.props.guesses && this.props.guesses.length === 3 ) {
        return <img src='https://i.imgur.com/i6QCGRy.jpg' />
        }

    if (this.props.guesses && this.props.guesses.length === 4 ) {
        return <img src='https://i.imgur.com/OWyZvqm.jpg' />
        }
    
    if( this.props.guesses && this.props.guesses.length === 5 ) {
        return <img src='https://i.imgur.com/prfHoGK.jpg' />
        }
    
    if( this.props.guesses && this.props.guesses.length === 6 ) {
        return <img src='https://i.imgur.com/tuBz9Cq.jpg' />
        }
}


render() {

    return (
            <Card>
                <h1>HANGMAN</h1>
                <div>{this.showPic()}</div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
      guesses: state.guesses
    };
  }

export default connect(mapStateToProps)(HangedMan)
