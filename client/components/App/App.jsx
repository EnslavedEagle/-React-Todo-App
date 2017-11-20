import React from 'react';
import TodoContainer from '../TodoContainer/TodoContainer.jsx';
import styles from './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles['app']}>
        <h1 className={styles['app__heading']}>ToDo App</h1>
        <TodoContainer />
      </div>
    );
  }
}