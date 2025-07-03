import { useTask } from "../../hooks/useTask";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { tasks } = useTask();
  return (
    <div>
      {tasks.length === 0 ? (
        <div>task not found</div>
      ) : (
        tasks.map((task) => {
          return <TaskItem task={task} />;
        })
      )}
    </div>
  );
};
