import * as types from '../constants/ActionTypes';

const addTodo = text => ({
  type: types.ADD_TODO,
  item: { id: new Date().getTime(), text },
});

export default addTodo;
