import React, { Component } from 'react';

export default class CreateTask extends Component {
  _onCreateClick = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="What do I need to do?" />
        <button onClick={e => this._onCreateClick(e)}>Create Task</button>
      </form>
    );
  }
}
