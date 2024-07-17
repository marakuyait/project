import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [priority, setPriority] = useState();

  const onHandleInput = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const onHandleSubmit = () => {
    const tempTodo = {
      id: uuidv4(),
      task: todo,
      isDone: false,
      taskPriority: priority,
    };

    setTodoList([tempTodo, ...todoList]);
    setTodo("");
    setPriority(undefined);
    console.log(tempTodo);
  };

  const onDoneBtn = (task) => {
    const updatedTodoList = todoList.map((todoItem) =>
      todoItem.id === task.id
        ? { ...todoItem, isDone: !todoItem.isDone }
        : todoItem
    );
    setTodoList(updatedTodoList);
  };

  const onHandleSelectPriority = (argument) => {
    setPriority(argument);
    console.log(argument);
  };

  const onDeleteBtn = (task) => {
    const updatedTodoList = todoList.filter(
      (todoItem) => todoItem.id !== task.id
    );
    setTodoList(updatedTodoList);
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          value={todo}
          placeholder="Please Input Your Task!"
          onChange={onHandleInput}
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          onClick={onHandleSubmit}
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          disabled={!{ priority }}
        >
          Submit
        </button>
      </div>
      <div className="priority">
        <span
          onClick={() => {
            setPriority("success");
          }}
          className="badge text-bg-success me-2"
        >
          Easy
        </span>
        <span
          onClick={() => {
            setPriority("warning");
          }}
          className="badge text-bg-warning me-2"
        >
          Misc
        </span>
        <span
          onClick={() => {
            setPriority("danger");
          }}
          className="badge text-bg-danger me-2"
        >
          Important
        </span>
      </div>

      <div>
        {todoList.map((todo) =>
          todo.isDone === false ? (
            <Todo key={todo.id} todo={todo} onDoneBtn={onDoneBtn} />
          ) : (
            <></>
          )
        )}
        <hr />
        <h5>Done List ✅</h5>
        {todoList.map((todo) =>
          todo.isDone === true ? (
            <Todo key={todo.id} todo={todo} onDoneBtn={onDoneBtn} />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}

export default App;
