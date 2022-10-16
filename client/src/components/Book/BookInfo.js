import React, { Fragment, useEffect, useState } from 'react';

const BookInfo = ({info, isLoggedIn, dispatch, putBook, gitBookId}) => {
  const [show,setShow] = useState(true);
  const [Info, setInfo] = useState(info && info);

  useEffect( ()=> {
    setInfo(info);
  }, [info])

  const putInfo = (e) => setInfo({...Info, [e.target.id]: e.target.value});

  const submit = (e) => {
    e.preventDefault();
    setShow(!show);
    dispatch(putBook(Info));
  };

  const cancel = () => {
    setShow(!show);
    gitBookId(info.id);
    setInfo(info);
  };
  return (
    <Fragment>
      {show?
      <>
        <h2>Book Details</h2>
        {!info&&
        (
          <div className='alert alert-secondary' role='alert'>
            There is no book selected yet. Please select!
          </div>
        )}
        {Info&&
        (
          <>
            <div>
              <p className='fw-bold'>Title: {Info.title}</p>
              <p className='fst-italic'>Price: {Info.price}</p>
              <p className='fw-light'>Description: {Info.description}</p>
            </div>
            <button 
              type='button' 
              className='btn btn-primary' 
              disabled={!isLoggedIn} 
              onClick={() => 
              setShow(!show)}
            >PUT</button>
          </>
        )}
      </>
      :
      <>
        <h2>Put Book</h2>
        <form onSubmit={submit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input 
              type='text' 
              id='title' 
              className='form-control' 
              onChange={putInfo} 
              value={Info.title} 
              required 
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input 
              type='number' 
              id='price' 
              className='form-control' 
              onChange={putInfo} 
              value={Info.price} 
              required 
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              id='description'
              className='form-control'
              onChange={putInfo}
              value={Info.description}
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>Submit</button>
          <button type='button' className='btn btn-danger' onClick={cancel}>Cancel</button>
        </form>
      </>
      }
    </Fragment>
  );
};

export default BookInfo;
