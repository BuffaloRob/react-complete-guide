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
        onClick={() => this.switchNameHandler('Robe')} value={this.props.name}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Roberto!')}
        changeName={this.nameChangeHandler.bind(this, )}
        >My hobbies: Racecar</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        />
      </div>;
  }
}

export default App;
