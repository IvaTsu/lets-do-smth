import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default ({ tasks }) => (
    <table>
        <TableHeader />
        <tbody>
            {tasks.map(item => {
                return (
                    <TableBody
                        key={item.task.toString()}
                        item={item.task}
                    />
                );
            })}
        </tbody>
    </table>
);