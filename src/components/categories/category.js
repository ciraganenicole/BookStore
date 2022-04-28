import React from 'react';
import Header from '../books/headers';

const Category = () => (
  <>
    <Header />
    <div className="flex justify-start items-center ml-5 gap-x-4">
      <input type="checkbox" id="status" value="status" />
      <h1>Check status</h1>
    </div>
  </>
);

export default Category;
