import React,{useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBook } from '../store/api';

const Addform = () => {
  const {isLoggedIn} = useSelector(state => state.auth);

  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    }

    dispatch(postBook(data));

    title.current.value = null;
    price.current.value = null;
    description.current.value = null;
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-5'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' ref={title} className='form-control' id='title' required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' ref={price} className='form-control' id='price' required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              ref={description}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
