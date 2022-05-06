/* eslint-disable jsx-quotes */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const data = [{
    id: 1,
    name: 'BOOKS',
    url: '/books',
  },
  {
    id: 2,
    name: 'CATEGORIES',
    url: '/category',
  },
  ];
  return (
    <header className='header'>
      <h1>
        {' '}
        BookStore CMS
        {' '}
      </h1>
      {' '}
      <ul className='liste'>
        {' '}
        {
            data.map(({ id, name, url }) => (
              <NavLink
                key={id}
                to={url}
              >
                <li>
                  {' '}
                  { name }
                  {' '}

                </li>
              </NavLink>
            ))
        }
        {' '}

      </ul>
      {' '}
      <div className="user-container">
        <FaUser className="user-icon" />
      </div>
      {' '}

    </header>
  );
};

export default Header;
