import { toDo } from "../../../models/todo-item";
import "./ToDoListItem.scss";

export const ToDoListItem = (props: {
  toDoItem: toDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  console.log(props);
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash"></button>
        <button
          className={props.toDoItem.isDone ? "btn-check" : "btn-uncheck"}
        ></button>
      </div>
    </li>
  );
};
