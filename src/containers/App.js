import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] inside constructor", props);
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[Update App.js] inside shouldComponentUpdate",
      nextProps,
      nextState
    );
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Update App.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[Update App.js] Inside componentDidUpdate");
  }

  state = {
    persons: [
      { id: "afas3", name: "Max", age: 28 },
      { id: "gasf5", name: "Rob", age: 33 },
      { id: "afgh5", name: "Chad", age: 44 }
    ],
    showPersons: false
  };

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
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    //can use above or below to make a copy of the array before modifying it
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log("App.js inside render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
