import { useState } from "react";
import "./task-form.css";

export const TaskForm = ({ setShowAddTaskForm }) => {
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  function handleOnSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }
  return (
    <div className="modal-container">
      <div className=".modal">
        <div className="modal-header">
          <h1>Add new Task</h1>
          <button onClick={() => setShowAddTaskForm(false)}>X</button>
        </div>
        <form onSubmit={handleOnSubmit} className="task-form">
          <div className="form-section">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={newTask.title}
              id="title"
              placeholder="Enter task title... "
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              required
            />
          </div>
          <div className="form-section">
            <label htmlFor="desc">desc</label>
            <textarea
              name="desc"
              id="desc"
              value={newTask.description}
              placeholder="Enter task description (optional)"
              rows={4}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
          </div>
          <div>
            <button type="button" onClick={() => setShowAddTaskForm(false)}>
              Cancel
            </button>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};
