import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'Todos',
    initialState: {
        todos:[{
            title: 'Hello World',
            id: 1
        }]
    },
    reducers: {
        addTodo: () => {},
        removeTodo: () => {},
        editTodo: () => {}
    }
})