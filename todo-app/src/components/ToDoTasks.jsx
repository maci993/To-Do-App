import React, { useState } from "react";
import {
  CheckIcon,
  PencilSquareIcon,
  MinusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import ToDoForm from "./ToDoForm";

const ToDoTasks = ({ todos, updateToDo, isChecked, deleteToDo }) => {
  const [editInput, setEditInput] = useState({
    id: null,
    text: "",
    classInput:
      "mt-4 flex items-center bg-white border border-white p-2 rounded-md",
  });

  const submitUpdate = (value) => {
    updateToDo(editInput.id, { ...editInput, text: value });
    setEditInput({
      id: null,
      text: "",
      classInput:
        "mt-4 flex items-center bg-white border border-white p-2 rounded-md",
    });
  };

  if (editInput.id)
    return <ToDoForm edit={editInput} handleAddToDo={submitUpdate} />;
  return todos.map((todo) => (
    <div key={todo.id} className={todo.classInput}>
      <input
        value={todo.text}
        className="bg-transparent flex-1 w-95 outline-none"
        type="text"
      />
      <div className="space-x-4">
        <button
          onClick={() => isChecked(todo.id, true)}
          className="bg-green-500 p-1 rounded-sm hover:bg-green-400"
        >
          <CheckIcon className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => isChecked(todo.id, false)}
          className="bg-red-500 p-1 rounded-sm hover:bg-red-400"
        >
          <MinusIcon className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() =>
            setEditInput({
              id: todo.id,
              text: todo.text,
              classInput: todo.classInput,
            })
          }
          className="bg-blue-500 rounded-sm p-1 hover:bg-blue-400"
        >
          <PencilSquareIcon className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => deleteToDo(todo.id)}
          className="bg-pink-600 p-1 rounded-sm hover:bg-pink-500"
        >
          <TrashIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  ));
};

export default ToDoTasks;
