import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {logInOut} from '../store/authSlice';
const Header = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth);

  const {err} = useSelector(state => state.books);
  return (
    <>
      {err && err}
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>
        <div>
          <Link to="/addForm">Insert Book </Link>
          <Link to="/">Home</Link>
        </div>
        <button className='btn btn-outline-primary' type='submit' onClick={() => dispatch(logInOut())}>
          {isLoggedIn? "Log Out": "Log In"}
        </button>
      </nav>
    </>
  );
};

export default Header;