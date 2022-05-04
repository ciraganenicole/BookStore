/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Hv9c4qLdQDZsZVD5KU1I/books';

export const fetchAll = () => axios.get(url);
export const addBook = (book) => axios.post(url, book);
export const deleteBook = (id) => axios.delete(`${url}/${id}`);
