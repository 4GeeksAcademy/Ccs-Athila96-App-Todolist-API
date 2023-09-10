import React from "react";
import { deleteData, postData, apiConnect } from "./apiConnect";

export const TodoClear = ({ setTask }) => {
  async function handlDelete() {
    await deleteData();
    await postData();
    const body = await apiConnect();
    setTask(body);
  }

  return (
    <button
      onClick={(event) => {
        handlDelete();
      }}
      className="btn"
    >
      Limpiar Pizarra
    </button>
  );
};
