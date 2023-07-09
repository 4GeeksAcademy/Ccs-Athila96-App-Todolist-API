import React from "react";

export const TodoTask = ({ text, indexTask, task, setTask }) => {
  return (
    <li className="TodoTask">
      <p className="TodoTask-p">{text}</p>
      <span
        className="Icon Icon-delete"
        onClick={(event) => {
          const filter = task.filter((arr, index) => index != indexTask);
          console.log(filter);
          setTask(() => {
            return filter;
          });
        }}
      >
        x
      </span>
    </li>
  );
};
