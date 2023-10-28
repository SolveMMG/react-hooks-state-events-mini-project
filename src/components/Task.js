import React from "react";

function Task({ task, onDelete }) {
  const handleDelete = () => {
    // Call the onDelete callback to delete the task
    onDelete(task);
  };

  return (
    <div className="task">
      <div className="category">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
