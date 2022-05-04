const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_ALL_BOOK = 'FETCH_ALL_BOOK';

export const reducer = (book = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...book, action.book];
    case REMOVE_BOOK:
      return [...book].filter((book) => book.id !== action.id);
    default:
      return book;
  }
};

export default reducer;

export const createBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export const getAllBooks = () => ({ type: FETCH_ALL_BOOK });
