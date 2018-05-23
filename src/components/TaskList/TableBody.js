import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  _onEditClick = () => {
    this.setState({
      isEditing: true,
    });
  }

  _onCancelClick = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    const { item, isCompleted } = this.props;
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
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer',
    };
    const renderOnCompleteStatusChange = <td style={taskStyle}>{item}</td>;
    return (
      <tr>
        {renderOnCompleteStatusChange}
        {renderBtnsOnActiveEdit}
      </tr>
    );
  }
}

TableBody.propTypes = {
  item: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
