import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import withClassTwo from '../../../hoc/withClassTwo';
import Aux from '../../../hoc/Aux';
// import Radium from 'radium';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("Person.js inside constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("Person.js inside componentWillMount");
  }

  componentDidMount() {
    console.log("Person.js inside componentDidMount");
    if (this.props.position === 0) {
        this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changeName}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClassTwo(Person, classes.Person);