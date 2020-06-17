import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    }
  }

  handleChange(value) {
    this.setState({userInput: value});
  }

  assignEvenAndOdds(userInput) {
    // fill it up
  }

  render() {
    return (
        <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}} >Split</button>
          <span className="resultsBox">Evens: {this.state.evenArray}</span>
          <span className="resultsBox">Odds: {this.state.oddArray}</span>
        </div>
    )
  }
}

export default EvenAndOdd;