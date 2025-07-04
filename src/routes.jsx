import { Navigate, Route, Routes } from "react-router-dom";
import { TaskManager } from "./page/TaskManager";
import { Login } from "./Components/auth/Login";

export const AppRoutes = () => {
  const username = localStorage.getItem("username");

  return (
    <Routes>
      <Route
        path="/"
        element={username ? <Navigate to="/tasks" /> : <Login />}
      />
      <Route
        path="/tasks"
        element={username ? <TaskManager /> : <Navigate to="/" />}
      />
    </Routes>
  );
};
