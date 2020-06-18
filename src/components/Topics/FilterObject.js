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
    let employees = this.state.employees;
    let filteredArray = [];

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredArray.push(employees[i]);
      }
    }

    this.setState({filteredArray: filteredArray});
  }
  

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {this.state.employees, null, 10}</span>
        <input className="inputLine"></input>
        <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {this.state.filteredArray, null, 10}</span>
      </div>
    )
  }
}

export default FilterObject;