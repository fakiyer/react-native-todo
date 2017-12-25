const initialState = {
  items: [],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        items: [...state.items, action.item],
      };
    default:
      return state;
  }
}
