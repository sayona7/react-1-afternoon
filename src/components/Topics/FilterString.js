import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: ["Veronica", "Jon-Erik", "Karlo", "Matt", "Amanda", "Suren", "EQ", "Natalie", "Jim"],
      userInput: "",
      filteredArray: []
    }
  }

  handleChange(value) {
    this.setState({userInput: value});
  }

  filterNames(userInput) {
    let unfilteredArray = this.state.unfilteredArray;
    let filteredArray = [];

    for (let i = 0; i < this.filterNames.length; i++) {
      if (names[i].includes(userInput)) {
        filteredArray.push(names[i]);
      }
    }
    this.setState({filteredArray: filteredArray});
  }
  
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
          <h4>Filter String</h4>
          <span className="puzzleText">Names: {this.state.unfilteredArray, null, 10}</span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => {this.filterNames(this.state.userInput)}} >Filter</button>
          <span className="resultsBox filterStringRB">Odds: {this.state.filteredArray, null, 10}</span>
        </div>
    )
  }
}

export default FilterString;