import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {BookType, StoredBookType} from 'src/types/book'

export interface BookState {
    books: Record<string, StoredBookType>;
    selectedBook: null | StoredBookType;
    addEditBook: boolean;

}

const initialState: BookState = {
    books: {},
    selectedBook: null,
    addEditBook: false,
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Omit<StoredBookType, 'id'>>) => {
            const id = window.crypto.randomUUID().toString();
            const {payload} = action;
            const book: StoredBookType = {...payload, id}

            state.books[id] = book;
        },
        updateBook: (state, action: PayloadAction<StoredBookType>) => {
            const {payload} = action;
            state.books[payload.id] = payload;
            state.selectedBook = null;
        },
        deleteBook: (state, action: PayloadAction<{ id: string }>) => {
            const {id} = action.payload;
            if (state.books[id]) {
                delete state.books[id];
            }
        },
        selectUpdateBook: (state, action: PayloadAction<StoredBookType>) => {
            const {payload} = action;
            state.selectedBook = payload;
            state.addEditBook = true;
        },
        editAddBook: (state, action: PayloadAction<{ state: boolean }>) => {
            const {payload} = action;
            state.addEditBook = payload.state;
        },
    },
})

export const {addBook, deleteBook, updateBook, selectUpdateBook, editAddBook} = bookSlice.actions

export default bookSlice.reducer
