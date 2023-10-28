import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const handleTaskDelete = (task) => {
    // Filter out the deleted task from the tasks array
    const updatedTasks = tasks.filter((t) => t !== task);
    onDeleteTask(updatedTasks);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={handleTaskDelete} />
      ))}
    </div>
  );
}

export default TaskList;
