import { FC, useState } from "react";
import TodoListItem from "./TodolistItem";
import { TodoTask } from "./type";

const TodoList: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [todoList, setTodoList] = useState<TodoTask[]>([]);
  const [edit, setEdit] = useState<boolean>(false);

  const addTask = (): void => {
    if (username !== "" && email !== "" && password !== "") {
      todoList.map((info_mail) => {
        console.log(info_mail.email);
      });

      const newTask = {
        username: username,
        email: email,
        password: password,
      };
      setTodoList([...todoList, newTask]);
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const complateTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.email !== taskNameToDelete;
      })
    );
  };

  const complateEdit = (taskNameToEdit: string): void => {
    setEdit(!edit);
    setTodoList(
      todoList.filter((task) => {
        return task.email === taskNameToEdit;
      })
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex w-[40%] mt-32 border-2 p-10 rounded">
        <div className="w-2/3">
          <input
            type="text"
            value={username}
            placeholder="username..."
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className="block border-2 w-full p-1 rounded-md outline-none"
          />
          <input
            type="email"
            value={email}
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="block border-2 w-full mt-4 p-1 rounded-md outline-none"
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="block border-2 w-full mt-4 p-1 rounded-md outline-none"
          />
        </div>
        <div className="w-1/3 flex justify-center items-center ml-5">
          <button
            type="button"
            onClick={addTask}
            className="w-full h-full bg-gray-500 text-white rounded-md"
          >
            Add infomation
          </button>
        </div>
      </div>

      <div className="w-[40%]">
        {todoList.map((task: TodoTask, key: number) => {
          return (
            <TodoListItem
              key={key}
              task={task}
              complateTask={complateTask}
              complateEdit={complateEdit}
            />
          );
        })}
      </div>

      <div className="w-[40%]">{edit && <div>haha</div>}</div>
    </div>
  );
};

export default TodoList;
