/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getAllBooks } from '../../redux/books/books';

const book = () => {
  const post = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const handleClick = (id, e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      {post.map((book) => (
        <div
          key={book.item_id}
          className='book-card'
        >
          <section>
            <div>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.category}</p>
            </div>
            <ul>
              <li>
                Comment
              </li>
              <li>
                <button
                  className='cursor-pointer'
                  onClick={(e) => handleClick(book.item_id, e)}
                  type='button'
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
