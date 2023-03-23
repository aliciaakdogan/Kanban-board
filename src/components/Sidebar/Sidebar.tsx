import "./Sidebar.scss";
import { useBoardContext } from "../../context/BoardsContext";
import ProjectsLinks from "../ProjectsLinks/ProjectsLinks";

type Props = {};

export default function Sidebar({}: Props) {
  const { projects, createProject, currentProject, changeBoard } =
    useBoardContext();

  return (
    <div className="sidebar">
      <p>Allboards ({projects.length}) </p>
      <ProjectsLinks />
    </div>
  );
}
