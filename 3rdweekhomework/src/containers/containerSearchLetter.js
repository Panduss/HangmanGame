import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeGuess } from '../actions/game';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {term: ''};
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  }


  onFormSubmit(event) {
    event.preventDefault();
    this.props.makeGuess( this.state.term );
    this.setState({term: ''});
  }

  render() {
    return (
        <div className="board">
          <div>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>a</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>b</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>c</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>d</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>e</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>f</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>g</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>h</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>i</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>j</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>k</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>l</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>m</button>
          </div>
          <div>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>n</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>o</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>p</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>q</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>r</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>s</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>t</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>u</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>v</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>w</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>x</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>y</button>
            <button className="board-tile" onClick={(event) => this.props.makeGuess(event.target.innerHTML)}>z</button>
          </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeGuess }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
