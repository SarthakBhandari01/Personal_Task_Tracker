import { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  return (
    <TaskContext.Provider value={{ tasks, setTasks, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
