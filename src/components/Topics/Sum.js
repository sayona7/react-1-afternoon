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

  updateNumber1(value) {
    this.setState({number1: parseInt(val, 10)});
  }

  updateNumber2(value) {
    this.setState({number2: parseInt(val, 10)});
  }

  add(number1, number2) {
    this.setState({sum: number1 + number2});
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
          <h4>Sum</h4>
          <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
          <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}} >Add</button>
          <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
    )
  }
}

export default Sum;