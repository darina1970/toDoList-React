import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { toDo } from "../models/todo-item";
import { useState } from "react";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<toDo[]>([
    {
      id: 0,
      text: "Первая задача",
      isDone: false,
    },
    {
      id: 1,
      text: "Вторая задача",
      isDone: true,
    },
    {
      id: 2,
      text: "Третья задача",
      isDone: true,
    },
  ]);

  const createNewToDo = (text: string) => {
    const newToDo: toDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
  };

  const updateToDo = (toDoItem: toDo) => {
    console.log("update");
    console.log(toDoItem);
  };

  const deleteToDo = (toDoItem: toDo) => {
    console.log("delete");
    console.log(toDoItem);
  };
  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
  );
};
