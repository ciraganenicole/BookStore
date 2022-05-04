/* eslint-disable jsx-quotes */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const book = () => {
  const post = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const handleClick = (id, e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };
  return (
    <>
      {post.map((book) => (
        <div
          key={book.id}
          className='book-card'
        >
          <section>
            <div>
              <p>{book.bookName}</p>
              <p>{book.bookAuthor}</p>
            </div>
            <ul>
              <li>
                Comment
              </li>
              <li>
                <button
                  className='cursor-pointer'
                  onClick={(e) => handleClick(book.id, e)}
                  type='submit'
                >
                  Remove
                </button>
              </li>
              <li>Edit</li>
            </ul>
          </section>
          <section>
            <div className='circle' />
            <div>
              <p>
                {book.completed}
                $
              </p>
              <p>Completed</p>
            </div>
          </section>
          <section>
            <div>
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
            </div>
            <button type='submit'>
              Update progress
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default book;
