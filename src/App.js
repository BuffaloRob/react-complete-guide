import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Rob', age: 33 },
      { name: 'Chad', age: 44 }
    ],
    showPersons: false,
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 33 },
        { name: 'Chad', age: 44 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    //can use above or below to make a copy of the array before modifying it
    const persons = [...this.state.persons];
    persons.slice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}/>
          })}
        </div>
      )
    }

    return <div className="App">
        <h1>I'm React Bitch</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Bring em out</button>
        
        {persons}
      </div>;
  }
}

export default App;
