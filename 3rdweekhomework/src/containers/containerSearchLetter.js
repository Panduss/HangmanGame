import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeGuess } from '../actions/game';


class SearchBar extends Component {
  constructor(props) {
    // passing props to be the base constructor
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // initial state
    this.state = {term: ''};
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  }

// prevent browser to refresh the page
  onFormSubmit(event) {
    event.preventDefault();
    this.props.makeGuess(this.state.term);
    this.setState({term: ''});

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder="Type 1 letter"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Go!</button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeGuess }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
