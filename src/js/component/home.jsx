import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDo } from "./toDo";
import { TodoCounter } from "./todoCounter";
import { TodoInput } from "./todoInput";
import { TodoList } from "./todoList";
import { TodoTask } from "./todoTask";

//create your first component
const Home = () => {
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);
  const totalTask = task.length;

  return (
    <React.Fragment>
      <TodoInput data={data} setData={setData} setTask={setTask} />
      <TodoList>
        {task.map((todo, i) => (
          <TodoTask
            key={i}
            text={todo}
            indexTask={i}
            setTask={setTask}
            task={task}
          />
        ))}
      </TodoList>

      <TodoCounter totalTask={totalTask} />
    </React.Fragment>
  );
};

export default Home;
