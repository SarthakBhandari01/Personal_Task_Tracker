import { useTask } from "../../hooks/useTask";
import "./task-filter.css";

export const TaskFilter = () => {
  const { tasks, filter, setFilter } = useTask();
  const taskCounts = {
    all: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };
  return (
    <div className="filter-tabs">
      <button
        className={`filter-tab ${filter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All ({taskCounts.all})
      </button>
      <button
        className={`filter-tab ${filter === "pending" ? "active" : ""}`}
        onClick={() => setFilter("pending")}
      >
        Pending ({taskCounts.pending})
      </button>
      <button
        className={`filter-tab ${filter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}
      >
        Completed ({taskCounts.completed})
      </button>
    </div>
  );
};
