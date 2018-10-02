import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'afas3', name: 'Max', age: 28 },
      { id: 'gasf5', name: 'Rob', age: 33 },
      { id: 'afgh5', name: 'Chad', age: 44 }
    ],
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    //OR use below
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
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
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changeName={(event) => this.nameChangeHandler(event, person.id)}
            />
          } )}
        </div>
      );

      btnClass = classes.Red;
    }

  const assignedClasses = [];
  if(this.state.persons.length <= 2) {
    assignedClasses.push( classes.red );
  }
  if (this.state.persons.length <= 1) {
    assignedClasses.push( classes.bold );
  }

    return (
      <div className={classes.App}>
        <h1>I'm React Bitch</h1>
        <p className={assignedClasses.join(' ')}>It's science</p>
        <button 
        className={btnClass}
        onClick={this.togglePersonsHandler}>Bring em out</button>
        
        {persons}
      </div>
    );
  }
}

export default App;
