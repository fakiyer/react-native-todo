// @flow

import * as types from '../constants/ActionTypes';
import type { Id, ItemText, TodosAction } from '../types/todos';

export const addTodo = (text: ItemText): TodosAction => ({
  type: types.ADD_TODO,
  text,
});

export const completeTodo = (id: Id): TodosAction => ({
  type: types.COMPLETE_TODO,
  id,
});

export const deleteTodo = (id: Id): TodosAction => ({
  type: types.DELETE_TODO,
  id,
});

export const editTodo = (id: Id, text: ItemText): TodosAction => ({
  type: types.EDIT_TODO,
  id,
  text,
});

export const openEditModal = (id: Id): TodosAction => ({
  type: types.OPEN_EDIT_MODAL,
  id,
});

export const closeEditModal = (id: Id): TodosAction => ({
  type: types.CLOSE_EDIT_MODAL,
  id,
});
