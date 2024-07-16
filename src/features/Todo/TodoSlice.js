import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    AddTodo: (state, action) => {
      // Extract the todo content from the action payload

      const newTodoContent = action.payload;

      // Validate the todo Content
      if (!newTodoContent.trim()) return state;

      // create a new todo object with new ID and the content
      const newTodo = {
        id: Math.random().toString(36).substring(2, 15),
        text: newTodoContent,
        completed: false,
      };
      // return a new state array with new todo added :
      return [...state, newTodo];
    },
    DeleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    UpdateTodo: (state, action) => {
      // console.log("checking updateslice", state.todo);
      const { id, text } = action.payload;
      

        return state.map((todo) => todo.id === id ? {...todo,text} : todo)
    
    },
  },
});

export const { AddTodo, DeleteTodo, UpdateTodo } = todoSlice.actions;

export default todoSlice.reducer;
