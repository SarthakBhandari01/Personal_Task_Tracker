import { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        filter,
        setFilter,
        deleteConfirm,
        setDeleteConfirm,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
