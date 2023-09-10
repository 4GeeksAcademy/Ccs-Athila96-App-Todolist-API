import React from "react";

export const TodoCounter = ({ totalTask, task }) => {
  const sinTareas = () => {
    const tareas = totalTask - 1;

    if (tareas == 0) {
      return "Ninguna tarea registrada";
    }

    if (tareas == 1) {
      return tareas + " Tarea por completar";
    }

    if (tareas > 1) {
      return tareas + " Tareas por completar";
    }
  };

  return (
    <div className="alert alert-secondary w-25 text-center" role="alert">
      {sinTareas()}
    </div>
  );
};
