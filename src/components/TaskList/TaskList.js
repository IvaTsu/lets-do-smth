import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const TaskList = ({ tasks }) => (
  <table>
    <TableHeader />
    <tbody>
      {tasks.map(item => (
        <TableBody
          key={item.task.toString()}
          item={item.task}
        />
      ))}
    </tbody>
  </table>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TaskList;
