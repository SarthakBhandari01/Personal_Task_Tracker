import { useState } from "react";
import { TaskItem } from "./TaskItem";
import "./task-list.css";

export const TaskList = ({ filteredTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="task-list">
      {filteredTask.length === 0 ? (
        <div className="empty-list">No tasks found.</div>
      ) : (
        filteredTask.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              editingTask={editingTask}
              setEditingTask={setEditingTask}
            />
          );
        })
      )}
    </div>
  );
};
