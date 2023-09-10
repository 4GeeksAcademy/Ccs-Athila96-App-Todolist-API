import React from "react";

export const TodoList = ({ children }) => {
  return (
    <div className="row">
      <div className="col ">
        <ul className="TodoList">{children}</ul>;
      </div>
    </div>
  );
};
