import { useState } from "react";
import { TaskForm } from "../Components/tasks/TaskForm";
import "./TaskManager.css";
import { TaskList } from "../Components/tasks/TaskList";
import { TaskFilter } from "../Components/tasks/TaskFilter";
import { Plus } from "lucide-react";

export const TaskManager = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  return (
    <div className="task-manager">
      <div className="task-manager-header">
        <h1>Task Manager</h1>
        <button
          className={"add-task-btn"}
          onClick={() => setShowAddTaskForm(true)}
        >
          <Plus size={20} />
          Add Task
        </button>
      </div>
      {showAddTaskForm && <TaskForm setShowAddTaskForm={setShowAddTaskForm} />}
      <TaskFilter />
      <TaskList />
    </div>
  );
};
