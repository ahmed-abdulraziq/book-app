import React from 'react';

const BooksList = ({isloading, books, isLoggedIn, dispatch, deleteBook, gitBookId}) => {
  return (
    <div>
      <h2>Books List</h2>
      { isloading? 'loading.....':     
        <ul className='list-group'>
          {
              books && (books.length? books.map(e =>(
              <li className='list-group-item d-flex  justify-content-between align-items-center' key={e.id}>
                <div>{e.title}</div>
                <div className='btn-group' role='group'>
                  <button type='button' className='btn btn-primary' onClick={() => gitBookId(e.id)}>
                    Read
                  </button>
                  <button 
                    type='button' 
                    className='btn btn-danger' 
                    disabled={!isLoggedIn} 
                    onClick={() => dispatch(deleteBook(e.id))}
                  >Delete</button>
                </div>
              </li>
            )): 'there is ni books available')
          }
        </ul> 
      }

    </div>
  );
};

export default BooksList;
