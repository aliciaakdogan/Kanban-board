import React, { createContext, useContext, useState } from "react";

interface Project {
  name: string;
}

interface Context {
  projects: Project[];
  createProject: (name: string) => void;
}

const BoardsContext = createContext<Context>({
  projects: [],
  createProject: () => {},
});

export function useBoardContext() {
  return useContext(BoardsContext);
}

type Props = {
  children: React.ReactNode;
};

export default function BoardsContextProvider({ children }: Props) {
  const [projects, setProjects] = useState<Project[]>([
    { name: "hej" },
    { name: "hejdå" },
  ]);

  function createProject(name: string) {
    setProjects([...projects, { name: name }]);
  }

  return (
    <BoardsContext.Provider value={{ projects, createProject }}>
      {children}
    </BoardsContext.Provider>
  );
}
