import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../../features/Todo/TodoSlice";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const todoss = useSelector((state) => state.todos);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = todo;
    dispatch(AddTodo(newTodo));
    // setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  };
  // console.log("first", todoss.length < 0);

  return (
    <>
      <div>
        <h1 className="text-xl text-blue-950 font-bold">Add Todo</h1>
        <div>
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              placeholder="Enter text"
              className="p-2 border  rounded-sm mr-2"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="p-2 border border-green-500 text-white bg-green-300 rounded-md"
            >
              Add Todo
            </button>
          </form>
        </div>
      </div>
      <div>
        {todoss.length === 0 ? (
          <h3 className="pt-2 ">No Todos Availabel</h3>
        ) : (
          <h3>
            Availabe Todo are <b>{todoss.length}</b>
          </h3>
        )}
        <ul className="w-1/2 m-auto">
          {todoss.map((todo) => (
            <li key={todo.id} className="border p-2 m-1">
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
