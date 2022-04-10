import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        Your Notes
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">ToDo List</NavLink>
        </li>
        <li>
          <NavLink to="/pictures">Pictures</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/">Log out</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
