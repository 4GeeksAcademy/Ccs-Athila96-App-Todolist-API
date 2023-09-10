import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDo } from "./toDo";
import { TodoCounter } from "./todoCounter";
import { TodoInput } from "./todoInput";
import { TodoList } from "./todoList";
import { TodoTask } from "./todoTask";
import { TodoClear } from "./todoClear";
import { apiConnect } from "./apiConnect";

//create your first component
const Home = () => {
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);
  const totalTask = task.length;

  async function handlGet() {
    const body = await apiConnect();
    setTask(body);
  }
  useEffect(() => {
    handlGet();
  }, []);

  return (
    <React.Fragment>
      <TodoInput data={data} setData={setData} setTask={setTask} task={task} />
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

        {/*         {task.map((todo, i) => (
          <NewTask
            key={i}
            text={todo}
            indexTask={i}
            setTask={setTask}
            task={task}
          /> 
        ))}*/}
      </TodoList>
      <TodoCounter totalTask={totalTask} task={task} />
      <TodoClear setTask={setTask} />
    </React.Fragment>
  );
};

export default Home;
