import React from 'react';
import styles from './TodoNewItem.css';

export default class TodoNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ itemName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = this.state.itemName.trim();

    if (!value) return;

    const newItem = {
      name: value,
      done: false
    };
    this.props.getItem(newItem);
    this.setState({ itemName: '' });
  }

  render() {
    return (
      <form className={styles['todoForm']} onSubmit={this.handleSubmit}>
        <input
          className={styles['todoForm__input']}
          value={this.state.itemName}
          onChange={this.handleChange}
          placeholder="Add new item..."
        />
        <button type="submit" className={styles['todoForm__button']}>Add</button>
      </form>
    );
  }
}