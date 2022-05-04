/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Category, Books, NotFound } from './components/component';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path='/' index element={<Books />} />
        <Route path='/category' element={<Category />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </div>
);

export default App;
