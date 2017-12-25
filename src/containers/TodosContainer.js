import React from 'react';
import { connect } from 'react-redux';

import addTodo from '../actions/TodoActions';
import Todos from '../components/Todos';

const TodosContainer = props => <Todos {...props} />;

const mapStateToProps = (state) => {
  const { todos } = state;

  return {
    todos,
  };
};

export default connect(mapStateToProps, {
  addTodo,
})(TodosContainer);
