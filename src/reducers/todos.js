import * as types from '../constants/ActionTypes';

const initialState = {
  items: [],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        items: [action.item, ...state.items],
      };
    case types.COMPLETE_TODO:
      return {
        ...state,
        items: state.items.map(item => (
          item.id === action.id ? { ...item, completed: true } : item
        )),
      };

    case types.DELETE_TODO:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
}
