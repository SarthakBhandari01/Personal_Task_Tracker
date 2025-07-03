import TaskContext, { TaskContextProvider } from "./context/TaskContext";
import { TaskManager } from "./page/TaskManager";

function App() {
  return (
    <TaskContextProvider>
      <TaskManager />
    </TaskContextProvider>
  );
}

export default App;
