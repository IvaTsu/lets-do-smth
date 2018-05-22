import React, { Component } from 'react';
import TaskList from './TaskList/TaskList';
import CreateTask from './CreateTask';
import './main.sass';

const tasks = [
  {
    task: 'read book',
    isCompleted: false,
  },
  {
    task: 'do exercises',
    isCompleted: false,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks,
    };
  }

  _createTask = (task) => {
    this.state.tasks.push({
      task,
      isCompleted: false,
    });
    this.setState({
      tasks: this.state.tasks,
    });
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <CreateTask createTask={this._createTask} />
        <TaskList tasks={tasks} />
      </div>
    );
  }
}
