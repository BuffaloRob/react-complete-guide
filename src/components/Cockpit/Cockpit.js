import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons){
    btnClass = classes.Red;

  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return(
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>It's science</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Bring em out</button>
      <button onClick={props.login}>Log In</button>
    </Aux>
  )
}

export default cockpit;