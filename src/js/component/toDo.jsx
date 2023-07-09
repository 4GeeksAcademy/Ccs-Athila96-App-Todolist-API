import React, { useState } from "react";

export const ToDo = () => {
  const [task, setTask] = useState([]);
  const [data, setData] = useState("");
  return (
    <div className="container bg-light">
      <ul className="list-group  todoList">
        <input
          type="text"
          className="text-dark input bg-light"
          id="ToDo"
          placeholder="escribete"
          value={data}
          onChange={(event) => {
            setData(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              setTask((prev) => {
                return [...prev, data];
              });
            }
          }}
        />
        {task.map((unaCosa, i) => {
          return (
            <li
              className="list-group-item  d-flex justify-content-between align-items-center justify-content-center li bg-light"
              key={i}
            >
              {unaCosa}
              <button
                onClick={(event) => {
                  const filter = task.filter((filterTask, filterIndexTask) => {
                    task.splice(filterIndexTask, 0);
                  });
                  console.log(filter);
                }}
              >
                {/* <i className="fa-solid fa-x fs-5"></i> */}X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
