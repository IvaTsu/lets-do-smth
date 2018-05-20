import React, { Component } from 'react';
import TaskList from './TaskList/TaskList';
import CreateTask from './CreateTask';

const tasks = [
  {
    task: 'read book',
    isCompleted: false,
  },
  {
    task: 'do exercises',
    isCompleted: false,
  },
  {
    task: 'do eercises',
    isCompleted: false,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CreateTask />
        <TaskList tasks={tasks} />
      </div>

    );
  }
}
