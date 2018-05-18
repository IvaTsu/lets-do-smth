import React from 'react';
import TaskList from './TaskList/TaskList';

const tasks = [
    {
        task: 'read book',
        isCompleted: false
    },
    {
        task: 'do exercises',
        isCompleted: false
    }
];

export default () => <TaskList tasks={tasks} />;
