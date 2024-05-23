import React from "react";

const History = ({ history }) => {
  return (
    <>
      <h4 className="text-black font-bold text-l pt-8">History:</h4>
      <div>
        {history.map((todo) => (
          <div key={todo.id} className={todo.classInput}>
            {todo.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default History;
