import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk('book/getBooks', async (args, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch('http://localhost:2000/books');
        const data = await res.json();
        return data;
    } catch(err) {
        return rejectWithValue(err.message);
    }
});

export const postBook = createAsyncThunk('book/postBook', async (args, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI;
    try {
        args.userName = getState().auth.name

        const res = await fetch('http://localhost:2000/books', {
            method: 'POST',
            body: JSON.stringify(args),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        const data = await res.json();
        
        return data;
    } catch(err) {
        return rejectWithValue(err.message);
    }
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        await fetch(`http://localhost:2000/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        return id;
    } catch(err) {
        return rejectWithValue(err.message);
    }
});

export const putBook = createAsyncThunk('book/putBook', async (args, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        await fetch(`http://localhost:2000/books/${args.id}`, {
            method: 'PUT',
            body: JSON.stringify(args),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        return args;
    } catch(err) {
        return rejectWithValue(err.message);
    }
});
