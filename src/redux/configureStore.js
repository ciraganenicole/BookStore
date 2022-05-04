/* eslint-disable no-underscore-dangle */
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({ bookReducer, categoryReducer });

const store = createStore(
  rootReducer, { bookReducer: [], categoryReducer: [] },
  compose(
    applyMiddleware(thunk),
  ),
);

export default store;
