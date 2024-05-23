import React, { useState } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const ToDoForm = ({ handleAddToDo, edit }) => {
  const [inputText, setInputText] = useState("");

  const handleClickPlus = (e) => {
    e.preventDefault();
    handleAddToDo({
      id: Math.floor(Math.random() * 10000),
      text: inputText,
      classInput:
        "mt-4 flex items-center border border-white bg-white rounded-md p-2",
    });
    setInputText("");
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    console.log("new value is: ____ : ", inputText);
    handleAddToDo(inputText);
    setInputText("");
  };

  return (
    <form>
      {edit ? (
        <div className="flex mt-4 items-center border bg-white border-white p-2 rounded-md">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="bg-transparent flex-1 w-96 outline-none"
            type="text"
            placeholder={edit.text}
          />
          <button
            type="submit"
            onClick={(e) => handleEditForm(e)}
            className="bg-green-500 p-1 rounded-sm hover:bg-green-400"
          >
            <CheckIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      ) : (
        <div className="flex items-center border bg-white border-white p-2 rounded-md">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="bg-transparent flex-1 w-96 outline-none"
            type="text"
          />
          <button
            type="submit"
            onClick={(e) => handleClickPlus(e)}
            className="bg-orange-500 p-1  rounded-sm hover:bg-orange-400 "
          >
            <PlusIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
    </form>
  );
};

export default ToDoForm;
