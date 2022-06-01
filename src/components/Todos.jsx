import React from "react";
import PropTypes from "prop-types";
import "./Todos.css";

const Todos = ({ tasks, setTasks }) => {
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <div key={`${task.title}-${index}`}>
          <li>{task.title}</li>
          <button onClick={() => handleDeleteTask(index)}>-</button>
        </div>
      ))}
    </ul>
  );
};

Todos.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Todos;
