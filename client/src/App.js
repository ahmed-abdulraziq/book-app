import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<BookContainer />}/>
            <Route path='/addForm' element={<AddForm />}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
