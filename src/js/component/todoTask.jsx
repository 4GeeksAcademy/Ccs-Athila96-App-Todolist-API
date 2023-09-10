import React from "react";
import { apiConnect, deleteData, postData, deleteTask } from "./apiConnect";

export const TodoTask = ({ text, indexTask, task, setTask }) => {
  async function handlPut(data) {
    await deleteTask(data);
    const body = await apiConnect();
    setTask(body);
  }

  return (
    <li className="TodoTask">
      {text.label !== "example task" && (
        <p className="TodoTask-p">{text.label}</p>
      )}
      <span
        className="Icon Icon-delete"
        onClick={(event) => {
          const filter = task.filter((arr, index) => index != indexTask);

          if (filter.length === 0) {
            deleteData();
            return;
          }
          handlPut(filter);
        }}
      >
        x
      </span>
    </li>
  );
};
