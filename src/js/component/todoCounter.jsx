import React from "react";

export const TodoCounter = ({ totalTask }) => {
  return (
    <div className="d-flex justify-content-start">
      <span className=""> {totalTask} item left</span>
    </div>
  );
};
