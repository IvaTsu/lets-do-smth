import React from 'react';
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
];

export default () => (
  <div>
    <CreateTask />
    <TaskList tasks={tasks} />
  </div>
);

