import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
          <h4>Palindrome</h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}} >Check</button>
          <span className="resultsBox"> {this.state.palindrome}</span>
        </div>
    )
  }
}

export default Palindrome;