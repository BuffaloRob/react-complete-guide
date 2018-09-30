import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Rob', age: 33 },
      { name: 'Chad', age: 44 }
    ]
  }
  render() {
    return <div className="App">
        <h1>I'm React Bitch</h1>
        <button>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racecar</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>;
  }
}

export default App;
