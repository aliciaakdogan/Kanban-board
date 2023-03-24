import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Project, projectsData } from "./projects-data";
import { useLocalStorage } from "usehooks-ts";

interface Context {
  projects: Project[];
  createProject: (name: string) => void;
  changeBoard: (index: number) => void;
  createTicket: (
    title: string,
    description: string,
    subtasks: string[],
    index: number
  ) => void;
  changeCurrentProjectBoard: (board: Project["board"]) => void;
  currentProject: Project;
}

const BoardsContext = createContext<Context>({
  projects: [],
  createProject: () => {},
  changeBoard: () => {},
  createTicket: () => {},
  changeCurrentProjectBoard: () => {},
  currentProject: {} as Project,
});

export function useBoardContext() {
  return useContext(BoardsContext);
}

type Props = {
  children: React.ReactNode;
};

export default function BoardsContextProvider({ children }: Props) {
  const [projects, setProjects] = useLocalStorage<Project[]>(
    "project-data",
    projectsData
  );

  const [selectedIndex, setSelectedIndex] = useLocalStorage(
    "selected-index",
    0
  );
  const currentProject = projects[selectedIndex];

  function createProject(name: string) {
    setProjects([
      ...projects,
      {
        name,
        id: uuidv4(),
        board: [
          { name: "Todo", tickets: [] },
          { name: "Doing", tickets: [] },
          { name: "Done", tickets: [] },
        ],
      },
    ]);
    changeBoard(projects.length);
  }

  function changeBoard(index: number) {
    setSelectedIndex(index);
  }

  function changeCurrentProjectBoard(board: Project["board"]) {
    projects[selectedIndex].board = board;

    setProjects([...projects]);
  }

  function createTicket(
    title: string,
    description: string,
    subtasks: string[],
    index: number
  ) {
    projects[selectedIndex].board[index].tickets.push({
      title,
      description,
      tasks: subtasks,
      id: uuidv4(),
    });

    setProjects([...projects]);
  }

  return (
    <BoardsContext.Provider
      value={{
        projects,
        createProject,
        currentProject,
        changeBoard,
        createTicket,
        changeCurrentProjectBoard,
      }}
    >
      {children}
    </BoardsContext.Provider>
  );
}
