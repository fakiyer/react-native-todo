import * as types from '../constants/ActionTypes';

export const addTodo = text => ({
  type: types.ADD_TODO,
  item: { id: new Date().getTime(), completed: false, text },
});

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id,
});

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id,
});
