import React from "react";
import { useBoardContext } from "../../context/BoardsContext";
import "./Navbar.scss";

type Props = {
  toggleShowCreateTask: () => void;
};

export default function Navbar({ toggleShowCreateTask }: Props) {
  const { currentProject } = useBoardContext();
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <h1>Kanban</h1>
      </div>
      <div className="navbar-main-container">
        <h4>{currentProject.name} </h4>
        <button className="btn" onClick={() => toggleShowCreateTask()}>
          Add new task
        </button>
      </div>
    </nav>
  );
}
