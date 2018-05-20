import React, { Component } from 'react';

export default class TableBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    _onEditClick = () => {
        this.setState({
            isEditing: true
        });
    }

    _onCancelClick = () => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    render() {
        const { item } = this.props;
        const renderBtnsOnActiveEdit = this.state.isEditing ? (
                <td>
                    <button>Save</button>
                    <button onClick={this._onCancelClick}>Cancel</button>
                </td>
        ) : (
            <td>
                <button onClick={this._onEditClick}>Edit</button>
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
