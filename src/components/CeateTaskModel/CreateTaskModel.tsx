import React, { useState } from "react";
import "./CreateTaskModel.scss";
import { X } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";

type Props = {
  toggleShowCreateTask: () => void;
};

export default function CreateTaskModel({ toggleShowCreateTask }: Props) {
  const { createTicket } = useBoardContext();
  const [subtasks, setSubtasks] = useState([""]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <div className="model-container">
      <div className="model-card">
        <div className="model-close" onClick={() => toggleShowCreateTask()}>
          <X />
        </div>
        <h3 className="model-title">Create new ticket</h3>

        <label htmlFor="status">State</label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(parseInt(e.target.value))}
        >
          <option value={0}>Todo</option>
          <option value={1}>Doing</option>
          <option value={2}>Done</option>
        </select>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="this is a title..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="this is a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Subtask</label>
        {subtasks.map((task, index) => (
          <div className="subtask-container">
            <input
              type="text"
              placeholder="this is a title..."
              onChange={(e) => {
                subtasks[index] = e.target.value;
                setSubtasks([...subtasks]);
              }}
              value={task}
            />
            <X
              onClick={() => {
                subtasks.splice(index, 1);
                setSubtasks([...subtasks]);
              }}
            />
          </div>
        ))}
        <button className="btn" onClick={() => setSubtasks([...subtasks, ""])}>
          Add new task
        </button>

        <button
          className="btn"
          onClick={() => {
            createTicket(title, description, subtasks, status);
            toggleShowCreateTask();
          }}
        >
          Create ticket
        </button>
      </div>
    </div>
  );
}
