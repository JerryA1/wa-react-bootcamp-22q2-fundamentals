import React, { useState } from "react";
import Todos from "../components/Todos";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSaveTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title: newTask }]);
    setNewTask("");
  };

  const handleOnchange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSaveTask}>
        <label htmlFor="title"></label>
        <input
          id="title"
          type="text"
          required
          placeholder="Add a todo"
          value={newTask}
          onChange={handleOnchange}
        />
        <button type="submit">+ Save</button>
      </form>

      {tasks.length > 0 ? (
        <Todos tasks={tasks} setTasks={setTasks} />
      ) : (
        <p>All done. No tasks yet, write and add a new task</p>
      )}
    </>
  );
};
