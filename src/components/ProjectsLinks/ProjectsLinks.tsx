import React, { useState } from "react";
import { Folder, Plus } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";
import "./ProjectsLinks.scss";

export default function () {
  const { projects, createProject, currentProject, changeBoard } =
    useBoardContext();
  const [showCreateProject, setShoeCreateProject] = useState(false);
  const [projectName, setProjectName] = useState("");

  return (
    <div className="projects-links">
      <ul className="sidebar-items">
        {projects.map((project, index) => (
          <li
            className={project.id === currentProject.id ? "active" : ""}
            onClick={() => changeBoard(index)}
          >
            <Folder />
            {project.name}
          </li>
        ))}

        <li onClick={() => setShoeCreateProject(!showCreateProject)}>
          <Plus />
          Create board
        </li>
      </ul>
      {showCreateProject && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProject(projectName);
            setProjectName("");
            setShoeCreateProject(false);
          }}
        >
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button className="btn" disabled={!projectName}>
            Create
          </button>
        </form>
      )}
    </div>
  );
}
