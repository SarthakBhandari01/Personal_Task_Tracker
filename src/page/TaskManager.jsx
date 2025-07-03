import { useState } from "react";
import { TaskForm } from "../Components/tasks/TaskForm";
import "./TaskManager.css";
export const TaskManager = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  return (
    <div className="task-manager">
      <div className="task-manager-header">
        <h1>Task Manager</h1>
        <button onClick={() => setShowAddTaskForm(true)}>Add Task</button>
      </div>
      {showAddTaskForm && <TaskForm setShowAddTaskForm={setShowAddTaskForm} />}
      
    </div>
  );
};
