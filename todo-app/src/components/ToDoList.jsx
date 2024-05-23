import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoTasks from "./ToDoTasks";
import History from "./History";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);

  const addToDo = (value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }
    setTodos([...todos, value]);
  };

  const updateToDo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(todos.map((item) => (item.id === todoId ? newValue : item)));
  };

  const isChecked = (todoId, isCheck) => {
    let newClassName = "";
    isCheck
      ? (newClassName =
          "mt-4 flex items-center bg-green-300 border border-white p-2 rounded-md")
      : (newClassName =
          "mt-4 flex items-center bg-red-300 border border-white p-2 rounded-md");
    setTodos(
      todos.map((item) =>
        item.id === todoId ? { ...item, classInput: newClassName } : item
      )
    );
  };

  const deleteToDo = (deleteId) => {
    const deleted = todos.find((todo) => {
      if (todo.id === deleteId) return todo;
    });
    setHistory([deleted, ...history]);
    setTodos(
      todos.filter((element) => {
        if (element.id !== deleteId) return element;
      })
    );
  };

  return (
    <div>
      <ToDoForm handleAddToDo={addToDo} />
      <ToDoTasks
        todos={todos}
        updateToDo={updateToDo}
        isChecked={isChecked}
        deleteToDo={deleteToDo}
      />
      <History history={history} />
    </div>
  );
};

export default ToDoList;
