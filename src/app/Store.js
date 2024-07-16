import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todos/todoSlice";
import counterReducer from "../features/Counter/CounterSlice";

export const store = configureStore({
  reducer: { todos: todoReducer, counter: counterReducer },
});
