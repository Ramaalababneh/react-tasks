// TodoList.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, removeTask } from "./actions";

const TodoList = ({ tasks, addTask, removeTask }) => {
  const [taskText, setTaskText] = useState(""); // State to store the text of a new task

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      addTask(taskText); // Dispatch the addTask action with the task text
      setTaskText(""); // Clear the input field after adding the task
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>{" "}
            {/* Dispatch the removeTask action with the task index */}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)} // Update taskText state as the user types
        />
        <button onClick={handleAddTask}>Add Task</button>{" "}
        {/* Call handleAddTask function when the button is clicked */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks, // Map the tasks from the Redux store to the component's props
});

const mapDispatchToProps = {
  addTask, // Map the addTask action to props
  removeTask, // Map the removeTask action to props
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); // Connect the component to the Redux store
