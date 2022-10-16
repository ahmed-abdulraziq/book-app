import { createSlice } from "@reduxjs/toolkit";
import { deleteBook, getBooks, postBook, putBook } from "./api.js";

const bookSlice = createSlice({
    name: "book",
    initialState: {books: null, isloading: false, err: null},
    extraReducers: {
        // git book
        [getBooks.pending]: (state, action) => {
            state.isloading = true;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isloading = false;
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            state.isloading = false;
            state.err = action.payload;
        },
        // post book
        [postBook.pending]: (state, action) => {
            state.isloading = true;
        },
        [postBook.fulfilled]: (state, action) => {
            state.isloading = false;
            state.books.push(action.payload);
        },
        [postBook.rejected]: (state, action) => {
            state.isloading = false;
            state.err = action.payload;
        },
        // delete book
        [deleteBook.pending]: (state, action) => {
            state.isloading = true;
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.isloading = false;
            state.books = state.books.filter((e) => e.id !== action.payload);
        },
        [deleteBook.rejected]: (state, action) => {
            state.isloading = false;
            state.err = action.payload;
        },
        // PUT book
        [putBook.pending]: (state, action) => {
            state.isloading = true;
        },
        [putBook.fulfilled]: (state, action) => {
            state.isloading = false;
            state.books = state.books.map((e) => e.id === action.payload.id? e = action.payload: e);
        },
        [putBook.rejected]: (state, action) => {
            state.isloading = false;
            state.err = action.payload;
        },
    }
});

export default bookSlice.reducer;
