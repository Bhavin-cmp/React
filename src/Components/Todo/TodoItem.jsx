import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteTodo, UpdateTodo } from "../../features/Todo/TodoSlice";

const TodoItem = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("checking edit", editedValue);
    if (isEdit) {
      dispatch(
        UpdateTodo({
          id: todo.id,
          text: editedValue,
        })
      );
    }
    setIsEdit(!isEdit);
  };
  const handleDelete = () => {
    dispatch(DeleteTodo(todo.id));
  };

  return (
    <div className="flex justify-between items-center mb-2">
      {isEdit ? (
        <form onSubmit={handleSubmit} className="flex-grow">
          <input
                      type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            className="border p-1 flex-grow"
          />
          <button className="border p-1 bg-green-500 text-white rounded-md mr-2">
            Save
          </button>
          <button
            type="button"
            className="border p-1 bg-red-500 text-white rounded-md"
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span className="bg-slate-400 m-2 p-1 flex-grow">{todo.text}</span>
          <button
            className="border p-1 border-yellow-800 bg-yellow-300 mr-3 rounded-md px-2"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
          <button
            className="border p-1 mr-3 rounded-md border-red-700 bg-red-400"
            onClick={handleDelete}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
