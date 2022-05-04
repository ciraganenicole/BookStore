/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import * as Api from '../../api/api';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_ALL_BOOK = 'FETCH_ALL_BOOK';

export const reducer = (book = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOK:
      return action.payload;
    case ADD_BOOK:
      return [...book, action.book];
    case REMOVE_BOOK:
      return [...book].filter((book) => book.item_id !== action.id);
    default:
      return book;
  }
};

export default reducer;

export const createBook = (book) => async (dispatch) => {
  await Api.addBook(book);
  dispatch({ type: ADD_BOOK, book });
};
export const removeBook = (id) => async (dispatch) => {
  await Api.deleteBook(id);
  dispatch({ type: REMOVE_BOOK, id });
};

const reformulateData = (data) => {
  const books = Object.entries(data);
  return books.map((element) => ({ item_id: element[0], ...element[1][0] }));
};

export const getAllBooks = () => async (dispatch) => {
  const { data } = await Api.fetchAll();
  const bookAvailable = reformulateData(data);

  dispatch({
    type: FETCH_ALL_BOOK,
    payload: bookAvailable,
  });
};
