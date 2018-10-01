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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: newName, age: 33 },
        { name: 'Chad', age: 55 }
      ]
    })
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return <div className="App">
        <h1>I'm React Bitch</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Bring em out</button>
        {
          this.state.showPersons ? 
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Roberto!')}
                changeName={this.nameChangeHandler.bind(this)}
              >My hobbies: Racecar</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
              />
            </div> : null
        }
      </div>;
  }
}

export default App;
