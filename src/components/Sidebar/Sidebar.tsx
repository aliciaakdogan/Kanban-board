import React from "react";
import { Folder, Plus } from "react-feather";
import "./Sidebar.scss";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="sidebar">
      <p>Allboards (2) </p>
      <ul className="sidebar-items">
        <li className="active">
          <Folder />
          Place board
        </li>
        <li>
          <Folder />
          Place board
        </li>
        <li>
          <Plus />
          Create board
        </li>
      </ul>
    </div>
  );
}
