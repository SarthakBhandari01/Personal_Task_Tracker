import { Check, Edit2, Trash2, X } from "lucide-react";
import "./task-item.css";
import { useTask } from "../../hooks/useTask";
import { useState } from "react";
import "../../App.css";

export const TaskItem = ({ task }) => {
  const { tasks, setTasks } = useTask();

  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const formatDate = (date) => {
    const dt = new Date(date);
    return (
      dt.toLocaleDateString() +
      "  " +
      dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    setDeleteConfirm(null);
  }

  return (
    <div className={`task-item ${task.completed ? "completed" : "pending"}`}>
      <div className="task-content">
        <div className="task-header">
          <button
            onClick={() => toggleComplete(task.id)}
            className={`complete-btn ${task.completed ? "completed" : ""}`}
          >
            {task.completed && <Check size={18} />}
          </button>
          <h3 className="task-title">{task.title}</h3>
        </div>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        <div className="task-info">
          <span className="task-date">
            Created: {formatDate(task.createdAt)}
          </span>
          <span
            className={`task-status ${
              task.completed ? "completed" : "pending"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button
          className="action-btn delete-btn"
          onClick={() => setDeleteConfirm(task.id)}
        >
          <Trash2 size={16} />
        </button>
      </div>
      {deleteConfirm && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-header">
              <h2>Confirm delete</h2>
              <button onClick={() => setDeleteConfirm(null)}>
                <X size={16} />
              </button>
            </div>
            <p>
              Are you sure you want to delete this task? This action cannot be
              undone.
            </p>
            <div className="form-action">
              <button
                className="btn-secondary"
                onClick={() => setDeleteConfirm(null)}
              >
                cancel
              </button>
              <button
                className="btn-danger"
                onClick={() => deleteTask(task.id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
