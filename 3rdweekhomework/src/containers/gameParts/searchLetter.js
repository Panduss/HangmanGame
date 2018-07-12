import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeGuess } from '../../actions/game';

class SearchBar extends Component {

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
  }
  
	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
        <div className="board">
          <div>Make your guess!</div>
          <div>
            <button id="1" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>a</button>
            <button id="2" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>b</button>
            <button id="3" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>c</button>
            <button id="4" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>d</button>
            <button id="5" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>e</button>
            <button id="6" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>f</button>
            <button id="7" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>g</button>
            <button id="8" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>h</button>
            <button id="9" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>i</button>
            <button id="10" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>j</button>
            <button id="11" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>k</button>
            <button id="12" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>l</button>
            <button id="13" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>m</button>
          </div>
          <div>
            <button id="14" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>n</button>
            <button id="15" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>o</button>
            <button id="16" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>p</button>
            <button id="17" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>q</button>
            <button id="18" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>r</button>
            <button id="19" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>s</button>
            <button id="20" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>t</button>
            <button id="21" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>u</button>
            <button id="22" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>v</button>
            <button id="23" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>w</button>
            <button id="24" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>x</button>
            <button id="25" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>y</button>
            <button id="26" className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>z</button>
          </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeGuess }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
