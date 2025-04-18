import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { toDo } from "../models/todo-item";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<toDo[]>([]);

  const createNewToDo = (text: string) => {
    const newToDo: toDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
    toast.success(`Добавлена новая задача: ${text}`);
  };

  const updateToDo = (toDoItem: toDo) => {
    const updatedIsDone = !toDoItem.isDone;

    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        // todo.isDone = !todo.isDone;
        return { ...todo, isDone: updatedIsDone };
      }
      return todo;
    });
    setTodos(newTodos);
    toast.info(
      `Задача ${toDoItem.text} ${updatedIsDone ? "выполнена" : "не выполнена"}`
    );
  };

  const deleteToDo = (toDoItem: toDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
    setTodos(newTodos);
    toast.error(`Удалена задача ${toDoItem.text}`);
  };
  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};
