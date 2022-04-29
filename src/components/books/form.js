import React from 'react';

const Form = () => (
  <div className="form">
    <input
      type="text"
      name="title"
      placeholder="Book title"
    />

    <input
      type="text"
      name="author"
      placeholder="Author"
    />
    <button type="submit" value="submit">Add book</button>
  </div>
);

export default Form;
