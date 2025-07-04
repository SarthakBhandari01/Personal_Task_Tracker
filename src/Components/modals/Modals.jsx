import { useTask } from "../../hooks/useTask";
import { DeleteTaskModal } from "./DeleteTaskModal";

export const Modals = () => {
  const { deleteConfirm } = useTask();
  return <>{deleteConfirm && <DeleteTaskModal />}</>;
};
