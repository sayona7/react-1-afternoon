import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    }
  }

  handleChange(value) {
    this.setState({userInput: value});
  }

  isPalindrome(userInput) {
    let forward = userInput;
    let backward = userInput;
    backward = backward.split("");
    backward = backward.reverse();
    backward = backward.join("");

    if (forward === backward) {
      this.setState({palindrome: "true"});
    } else {
      this.setState({palindrome: "false"});
    }
  }


  render() {
    return (
      <div className="puzzleBox filterStringPB">
          <h4>Palindrome</h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => {this.isPalindrome(this.state.userInput)}} >Check</button>
          <span className="resultsBox"> {this.state.palindrome}</span>
        </div>
    )
  }
}

export default Palindrome;