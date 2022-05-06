/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../../redux/books/books';

const books = () => {
  const [book, setBook] = useState({
    completed: 64,
    chapter: 20,
    chapterTitle: '',
    item_id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });
  const { author, title, category } = book;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      completed: 64,
      chapter: 20,
      chapterTitle: 'Harry porter',
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(createBook(newBook));
    setBook(newBook);
  };
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          placeholder='Book title'
          required
          name='title'
          value={title}
          onChange={handleChange}
        />
        <input
          type='text'
          name='author'
          value={author}
          placeholder='Book author'
          onChange={handleChange}
          required
        />
        <input
          name='category'
          id='category'
          placeholder='Category'
          value={category}
          onChange={handleChange}
          required
        />
        <input
          type='submit'
          value='Add book'
        />
      </form>
    </>
  );
};

export default books;
