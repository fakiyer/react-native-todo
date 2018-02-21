// @flow

import * as types from '../constants/ActionTypes';

export type OpenEditModal = boolean;

export type Id = number;
export type ItemText = string;
export type Editing = boolean;

export type Item = {
  +id: Id,
  +text: ItemText,
  +completed: boolean,
  +editing: Editing,
};

export type Items = Array<Item>;

export type TodosState = {
  +openEditModal: OpenEditModal,
  +items: Items,
};

export type TodosAction =
  | { type: typeof types.ADD_TODO, +text: ItemText }
  | { type: typeof types.COMPLETE_TODO, +id: Id }
  | { type: typeof types.DELETE_TODO, +id: Id }
  | { type: typeof types.EDIT_TODO, +id: Id, +text: ItemText }
  | { type: typeof types.OPEN_EDIT_MODAL, +id: Id }
  | { type: typeof types.CLOSE_EDIT_MODAL, +id: Id };
