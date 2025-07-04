import { useTask } from "../../hooks/useTask";
import { TaskItem } from "./TaskItem";
import "./task-list.css";

export const TaskList = () => {
  const { tasks, filter } = useTask();

  const filteredTask = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return task.completed;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTask.length === 0 ? (
        <div className="empty-list">task not found</div>
      ) : (
        filteredTask.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })
      )}
    </div>
  );
};
