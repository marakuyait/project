/* eslint-disable react/prop-types */
import React from "react";

export const Todo = ({ todo, onDoneBtn }) => {
  const { id, task, isDone, taskPriority } = todo;
  const getPriorityText = (text) => {
    switch (text) {
      case "success":
        return "Easy";
      case "danger":
        return "Important";
      default:
        return "Mics";
    }
  };
  return (
    <div
      className={`bg-${
        isDone ? "success" : "info"
      } border border-info bg-opacity-10 mb-1 p-2 d-flex justify-content-between rounded align-items-center`}
      key={id}
    >
      <p className="m-0">
        {task} -{" "}
        {
          <span className={`badge text-bg-${taskPriority} me-2`}>
            {getPriorityText(taskPriority)}
          </span>
        }
      </p>
      <div>
        <button
          onClick={() => onDoneBtn(todo)}
          className="btn btn-sm btn-success mx-1"
        >
          Done
        </button>
        <button className="btn btn-danger" onClick={() => onDeleteBtn(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
};
