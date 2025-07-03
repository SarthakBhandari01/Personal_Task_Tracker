import { Check } from "lucide-react";

export const TaskItem = ({ task }) => {
  return (
    <div className="task-content">
      <div className="">
        <button>{task.completed && <Check size={15} />}</button>
        <h3 className="task-title">{task.title}</h3>
      </div>
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      <div className="task-info">
        {/* <span className="task-date">Created: {formatDate(task.createdAt)}</span> */}
        <span
          className={`task-status ${task.completed ? "completed" : "pending"}`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>
    </div>
  );
};
