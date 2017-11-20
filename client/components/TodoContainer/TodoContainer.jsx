import React from 'react';
import TodoElement from '../TodoElement/TodoElement.jsx';
import TodoNewItem from '../TodoNewItem/TodoNewItem.jsx';
import styles from './TodoContainer.css';

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };

    this.handleNewItem = this.handleNewItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  handleNewItem(value) {
    const newTodos = [...this.state.todos, value];
    this._save(newTodos);
    this.setState({ todos: newTodos });
  }

  handleDelete(index) {
    const newTodos = this.state.todos.slice();
    newTodos.splice(index, 1);
    this._save(newTodos);
    this.setState({ todos: newTodos });
  }

  toggleDone(index) {
    const newTodos = this.state.todos.slice();
    newTodos[index].done = !newTodos[index].done;
    this._save(newTodos);
    this.setState({ todos: newTodos });
  }

  componentWillMount() {
    this._load();
  }

  render() {
    const elements = this.state.todos
      .sort((a, b) => a.done && !b.done)
      .map((item, index) => <TodoElement key={index} item={item} index={index} toggleDone={this.toggleDone} deleteItem={this.handleDelete} />)
    return (
      <div className={styles.todo__container}>
        <TodoNewItem getItem={this.handleNewItem} />
        <ul className={styles.todo__list}>{elements}</ul>
      </div>
    );
  }

  _load() {
    if (typeof Storage !== 'undefined' && localStorage['todos']) {
      const saved = JSON.parse(localStorage.getItem('todos'));
      this.setState({ todos: saved });
    }
  }

  _save(todos) {
    if (typeof Storage !== 'undefined') {
      const data = JSON.stringify(todos);
      localStorage.setItem('todos', data);
    }
  }
}