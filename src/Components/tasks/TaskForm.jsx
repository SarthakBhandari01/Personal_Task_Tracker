import { useState } from "react";
import "./task-form.css";
import { useTask } from "../../hooks/useTask";

export const TaskForm = ({ setShowAddTaskForm }) => {
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const { tasks, setTasks } = useTask();

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!newTask.title.trim()) return;
    console.log(Date.now().toString());
    const task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    console.log(tasks);
    setTasks([...tasks, task]);
    setNewTask({ title: "", description: "" });
    setShowAddTaskForm(false);
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
