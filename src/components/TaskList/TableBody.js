import React, { Component } from 'react';

export default class TableBody extends Component {
    render() {
        return (
            <tr>
                <td>{item}</td>
                <button>Edit</button>
                <button>Delete</button>
            </tr>
        );
    }
}
