import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/Todo/TodoSlice";
import productReducer from './features/Todo/ProductSlice'

export const Store = configureStore({
  reducer: { todos: todoReducer,products:productReducer },
});
