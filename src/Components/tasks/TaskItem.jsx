import { Check, Edit2, Trash2, X } from "lucide-react";
import "./task-item.css";
import { useTask } from "../../hooks/useTask";
import "../../App.css";
import "./task-form.css";

export const TaskItem = ({ task, editingTask, setEditingTask }) => {
  const { tasks, setTasks, setDeleteConfirm } = useTask();

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

  function updateTask(id, e) {
    e.preventDefault();
    if (!editingTask.title.trim()) return;
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...editingTask,
              title: editingTask.title.trim(),
              description: editingTask.description.trim(),
            }
          : task
      )
    );
    setEditingTask(null);
  }
  return (
    <div className={`task-item ${task.completed ? "completed" : "pending"}`}>
      {editingTask && editingTask.id === task.id ? (
        <form onSubmit={(e) => updateTask(task.id, e)} className="task-form">
          <div className="form-section">
            <input
              type="text"
              value={editingTask.title}
              onChange={(e) =>
                setEditingTask({ ...editingTask, title: e.target.value })
              }
              required
            />
          </div>
          <div className="form-section">
            <textarea
              value={editingTask.description || ""}
              onChange={(e) =>
                setEditingTask({ ...editingTask, description: e.target.value })
              }
              rows={3}
            />
          </div>
          <div className="edit-actions">
            <button type="submit" className="btn-save">
              <Check size={16} />
            </button>
            <button
              type="button"
              onClick={() => setEditingTask(null)}
              className="btn-cancel"
            >
              <X size={16} />
            </button>
          </div>
        </form>
      ) : (
        <>
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
              className="action-btn edit-btn"
              onClick={() =>
                setEditingTask({
                  ...task,
                  title: task.title || "",
                  description: task.description || "",
                })
              }
            >
              <Edit2 size={16} />
            </button>
            <button
              className="action-btn delete-btn"
              onClick={() => setDeleteConfirm(task.id)}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
