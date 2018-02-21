// @flow

import * as types from '../constants/ActionTypes';
import type { Editing, Items, Item, Id, ItemText, TodosState } from '../types/todos';
import type { Action } from '../types';

const initialState = {
  openEditModal: false,
  items: [],
};

const createTodo = (text: ItemText): Item => ({
  id: new Date().getTime(),
  text,
  completed: false,
  editing: false,
});

const completeTodo = (items: Items, id: Id): Items =>
  items.map(item => (item.id === id ? { ...item, completed: true } : item));

const deleteTodo = (items: Items, id: Id): Items => items.filter(item => item.id !== id);

const editTodo = (items: Items, id: Id, text: ItemText): Items =>
  items.map(item => (item.id === id ? { ...item, text } : item));

const toggleEditModal = (items: Items, id: Id, editing: Editing): Items =>
  items.map(item => (item.id === id ? { ...item, editing } : item));

export default function todos(state: TodosState = initialState, action: Action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        items: [createTodo(action.text), ...state.items],
      };
    case types.COMPLETE_TODO:
      return {
        ...state,
        items: completeTodo(state.items, action.id),
      };
    case types.DELETE_TODO:
      return {
        ...state,
        items: deleteTodo(state.items, action.id),
      };
    case types.EDIT_TODO:
      return {
        ...state,
        items: editTodo(state.items, action.id, action.text),
      };
    case types.OPEN_EDIT_MODAL:
      return {
        ...state,
        openEditModal: true,
        items: toggleEditModal(state.items, action.id, true),
      };
    case types.CLOSE_EDIT_MODAL:
      return {
        ...state,
        openEditModal: false,
        items: toggleEditModal(state.items, action.id, false),
      };
    default:
      return state;
  }
}
