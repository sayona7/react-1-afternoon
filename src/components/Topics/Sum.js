import React, { Component } from 'react';

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
          <h4>Sum</h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}} >Add</button>
          <span className="resultsBox"> {this.state.sum}</span>
        </div>
    )
  }
}

export default Sum;