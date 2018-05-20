import React, { Component, createRef } from 'react';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.newTask = createRef();
  }
  _handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.newTask.current.value);
  };

  render() {
    return (
      <form onSubmit={e => this._handleSubmit(e)}>
        <input type="text" placeholder="What do I need to do?" ref={this.newTask} />
        <button>Create Task</button>
      </form>
    );
  }
}
