import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Board from "./components/Board/Board";
import CreateTaskModel from "./components/CeateTaskModel/CreateTaskModel";
import { useState } from "react";
import ProjectsDropdown from "./components/ProjectsDropdown/ProjectsDropdown";
export default function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);

  function toggleShowCreateTask() {
    setShowCreateTask(!showCreateTask);
  }

  function toggleShowProjectDropdown() {
    setShowProjectDropdown(!showProjectDropdown);
  }
  return (
    <div className="app">
      <Navbar
        toggleShowCreateTask={toggleShowCreateTask}
        toggleShowProjectsDropdown={toggleShowProjectDropdown}
      />
      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      {showCreateTask && (
        <CreateTaskModel toggleShowCreateTask={toggleShowCreateTask} />
      )}
      {showProjectDropdown && (
        <ProjectsDropdown
          toggleShowProjectsDropdown={toggleShowProjectDropdown}
        />
      )}
    </div>
  );
}
