import React from 'react';

export default ({ item }) => (
    <tr>
        <td>{item}</td>
        <button>Edit</button>
        <button>Delete</button>
    </tr>
);