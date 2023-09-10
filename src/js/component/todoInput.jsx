import React, { useEffect, useState } from "react";
import { putData, apiConnect } from "./apiConnect";

export const TodoInput = ({ data, setData, setTask, task }) => {
  async function handlGet() {
    await putData(data, task);
    const body = await apiConnect();
    setTask(body);
  }
  return (
    <div className="row">
      <div className="col">
        <input
          className="TodoInput"
          type="text"
          placeholder="Escribe una tarea nueva"
          value={data}
          onChange={(event) => {
            setData(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              if (data == "") {
                return alert("No hay ninguna tarea que registrar");
              } else {
                handlGet();

                setData("");
                /* setTask((prev) => {
                  return [...prev, data];
                }); */
              }
            }
          }}
        />
      </div>
    </div>
  );
};
