import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, deleteBook, putBook } from '../../store/api';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';

const PostContainer = () => {
  const [book, setBook] = useState(null);
  const {isloading, books} = useSelector((state) => state.books);
  const {isLoggedIn} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const gitBookId = (id) => setBook(books.find((e) => e.id === id));

  return (
    <Fragment>
      <div className='row mt-5'>
        <div className='col'>
          <BooksList 
            isloading={isloading} 
            books={books} 
            isLoggedIn={isLoggedIn} 
            deleteBook={deleteBook} 
            dispatch={dispatch} 
            gitBookId={gitBookId}
          />
        </div>
        <div className='col side-line'>
          <BookInfo 
            info={book} 
            isLoggedIn={isLoggedIn} 
            putBook={putBook} 
            dispatch={dispatch} 
            gitBookId={gitBookId}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
