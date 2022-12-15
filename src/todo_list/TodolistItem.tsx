import { FC } from "react";
import { TodoTask } from "./type";

type Props = {
  task: TodoTask;
  complateTask(taskNameToDelete: string): void;
  complateEdit(taskNameToEdit: string): void;
};

const TodoListItem: FC<Props> = ({
  task,
  complateTask,
  complateEdit,
}: Props) => {
  return (
    <div className="flex mt-3 border-2 justify-between w-full p-2 items-center rounded-md">
      <div>{task.username}</div>
      <div>{task.email}</div>
      <div>{task.password}</div>
      <button
        type="button"
        onClick={() => complateTask(task.email)}
        className="bg-red-500 text-white px-3 py-1 rounded-md"
      >
        Delete
      </button>

      <button
        type="button"
        onClick={() => complateEdit(task.email)}
        className="bg-blue-500 text-white px-3 py-1 rounded-md"
      >
        Edit
      </button>
    </div>
  );
};
export default TodoListItem;
