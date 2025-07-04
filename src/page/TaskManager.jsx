import { useState } from "react";
import { TaskForm } from "../Components/tasks/TaskForm";
import "./TaskManager.css";
import { TaskList } from "../Components/tasks/TaskList";
import { TaskFilter } from "../Components/tasks/TaskFilter";
import { Plus } from "lucide-react";
import { useTask } from "../hooks/useTask";
import { SearchTask } from "../Components/tasks/SearchTask";

export const TaskManager = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const { tasks, filter, searchQuery } = useTask();

  const filteredTask = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter((task) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        task.title.toLowerCase().includes(query) ||
        (task.description || "").toLowerCase().includes(query)
      );
    });

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

      <SearchTask />

      {showAddTaskForm && <TaskForm setShowAddTaskForm={setShowAddTaskForm} />}

      <TaskFilter />

      <TaskList filteredTask={filteredTask} />
    </div>
  );
};
