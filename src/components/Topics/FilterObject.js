import React, { Component } from 'react';

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      userInput: "",
      filteredArray: []
    }
  }

  handleChange(value) {
    this.setState({userInput: value});
  }

  filterArray(prop) {
    //fill it up
  }
  

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{this.state.unfilteredArray}</span>
        <input className="inputLine"></input>
        <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">{this.state.filteredArray}</span>
      </div>
    )
  }
}

export default FilterObject;