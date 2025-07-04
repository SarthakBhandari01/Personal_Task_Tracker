import { X } from "lucide-react";
import { useTask } from "../../hooks/useTask";
import "../../App.css";
import "../tasks/task-item.css";
import { useEffect } from "react";

export const DeleteTaskModal = () => {
  const { tasks, setTasks, deleteConfirm, setDeleteConfirm } = useTask();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  if (!deleteConfirm) return null;

  function handleDelete() {
    setTasks(tasks.filter((t) => t.id !== deleteConfirm));
    setDeleteConfirm(null);
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h2>Confirm delete</h2>
          <button className="btn-close" onClick={() => setDeleteConfirm(null)}>
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
          <button className="btn-danger" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
