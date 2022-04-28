import React from 'react';

const Form = () => (
  <div className="form">
    <input
      type="text"
      name="text"
      placeholder="Book title"
    />

    <select name="category" id="category">
      <option value="">Category</option>
      <option value="">Category 1</option>
      <option value="">Category 2</option>
    </select>

    <button type="submit" value="submit">Add book</button>
  </div>
);

export default Form;
