/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Category, Books } from './components/component';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path='/books' index element={<Books />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </Router>
  </div>
);

export default App;
