import React from 'react';
import styles from './TodoElement.css';

export default class TodoElement extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(event) {
    this.props.toggleDone(this.props.index);
  }

  handleDelete(event) {
    this.props.deleteItem(this.props.index);
  }
  
  render() {
    return (
      <li className={styles['element']}>
        <span className={styles['element__delete']} onClick={this.handleDelete}>x</span>
        <span
          className={styles['element__name'] + (this.props.item.done ? ' ' + styles['element--done'] : '')}
          onClick={this.handleClick}
        >
          {this.props.item.name}
        </span>
      </li>
    );
  }
}