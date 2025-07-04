import { Modals } from "./Components/modals/Modals";
import TaskContext, { TaskContextProvider } from "./context/TaskContext";
import { TaskManager } from "./page/TaskManager";
import { AppRoutes } from "./routes";

function App() {
  return (
    <TaskContextProvider>
      <AppRoutes />
      <Modals />
    </TaskContextProvider>  
  );
}

export default App;
