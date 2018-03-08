// @flow

import React from 'react';
import { connect } from 'react-redux';

import {
  addTodo,
  completeTodo,
  deleteTodo,
  editTodo,
  openEditModal,
  closeEditModal,
} from '../actions/TodoActions';
import Main from '../components/Main';

const MainContainer = props => <Main {...props} />;

const mapStateToProps = (state) => {
  const { todos } = state;
  // TODO: move to selector
  let editingTodo = null;
  if (todos.openEditModal) {
    editingTodo = todos.items.find(item => item.editing);
  }

  return {
    todos,
    editingTodo,
  };
};

export default connect(mapStateToProps, {
  addTodo,
  completeTodo,
  deleteTodo,
  editTodo,
  openEditModal,
  closeEditModal,
})(MainContainer);
