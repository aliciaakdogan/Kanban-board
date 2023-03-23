import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Board from "./components/Board/Board";
import CreateTaskModel from "./components/CeateTaskModel/CreateTaskModel";
import { useState } from "react";
export default function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);

  function toggleShowCreateTask() {
    setShowCreateTask(!showCreateTask);
  }
  return (
    <div className="app">
      <Navbar toggleShowCreateTask={toggleShowCreateTask} />
      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      {showCreateTask && (
        <CreateTaskModel toggleShowCreateTask={toggleShowCreateTask} />
      )}
    </div>
  );
}
