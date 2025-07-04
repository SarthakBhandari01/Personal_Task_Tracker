import { Modals } from "./Components/modals/Modals";
import TaskContext, { TaskContextProvider } from "./context/TaskContext";
import { TaskManager } from "./page/TaskManager";

function App() {
  return (
    <TaskContextProvider>
      <TaskManager />
      <Modals />
    </TaskContextProvider>
  );
}

export default App;
