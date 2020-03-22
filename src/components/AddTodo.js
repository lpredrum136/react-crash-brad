import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  changeTitle = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addJob = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.addJob}>
        <input
          type='text'
          name='title'
          placeholder='AddTodo'
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.changeTitle}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
