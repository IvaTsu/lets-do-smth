import React, { Component } from 'react';

export default class TableBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    _onClick = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }       

    render() {
        const { item } = this.props;
        const renderBtnsOnActiveEdit = this.state.isEditing ? (
                <td>
                    <button onClick={this._onClick}>Save</button>
                    <button>Cancel</button>
                </td>
        ) : (
            <td>
                <button onClick={this._onClick}>Edit</button>
                <button>Exit</button>
            </td>
        );
        return (
            <tr>
                <td>{item}</td>
                {renderBtnsOnActiveEdit}
            </tr>
        );
    }
}
