/* eslint-disable jsx-quotes */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const data = [
    {
      id: 1,
      name: 'Books',
      url: '/books',
    },
    {
      id: 2,
      name: 'Categories',
      url: '/category',
    },
  ];
  return (
    <header className='header'>
      <h1>BookStore CMS</h1>
      <ul className='list'>
        {data.map(({ id, name, url }) => (
          <NavLink key={id} to={url}>
            <li>{name}</li>
          </NavLink>
        ))}
      </ul>
    </header>
  );
};

export default Header;
