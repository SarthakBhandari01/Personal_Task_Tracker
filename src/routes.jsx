import { Navigate, Route, Routes } from "react-router-dom";
import { TaskManager } from "./page/TaskManager";
import { Login } from "./Components/auth/login";

export const AppRoutes = () => {
  const username = localStorage.getItem("username");

  return (
    <Routes>
      <Route
        path="/"
        element={!username ? <Login /> : <Navigate to="/tasks" replace />}
      />

      <Route
        path="/tasks"
        element={username ? <TaskManager /> : <Navigate to="/" replace />}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
