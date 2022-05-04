/* eslint-disable jsx-quotes */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../books/headers';
import { checkStatus } from '../../redux/categories/categories';

const index = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoryReducer);
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <Header />
      <div>
        <button
          type='submit'
          onClick={() => handleClick()}
        >
          Check status
        </button>
        <h1>{status}</h1>
      </div>
    </>
  );
};

export default index;
