const ADDING = 'ADDING';
const REMOVING = 'REMOVING';
const initialState = [];

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING:
      return [...state, action.state];
    case REMOVING:
      return [...state].filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const createBook = (state) => ({ type: ADDING, state });

export const removeBook = (state) => ({ type: REMOVING, state });
