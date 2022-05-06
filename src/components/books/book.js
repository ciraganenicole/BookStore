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
          className="row"
        >
          <section className="grid-item">
            <div>
              <p><span className="category">{book.category}</span></p>
              <p><span className="title">{book.title}</span></p>
              <p><span className="author">{book.author}</span></p>
            </div>
            <ul className="list">
              <li>
                <button type="button">Comment</button>
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
              <li>
                <button type="button">Edit</button>
              </li>
            </ul>
          </section>
          <section className="grid-item item1">
            <div>
              <p className="pourcent">65%</p>
              <p className="complete">Completed</p>
            </div>
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask half">
                  <div className="fill" />
                </div>
                <div className="inside-circle">
                  {book.completed}

                </div>
              </div>
            </div>
          </section>
          <section className="grid-item">
            <div>
              <p className="current">CURRENT CHAPTER</p>
              <p className="chap">Chapter 17</p>
            </div>
            <button type='submit'>
              UPDATE PROGRESS
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default book;
