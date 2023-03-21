import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { useBoardContext } from "../../context/BoardsContext";

export default function Board() {
  const { currentProject } = useBoardContext();
  return (
    <div className="board">
      {currentProject.board.map((column) => (
        <div className="board-column">
          <div className="board-title">
            <div className="board-title-icon todo"></div>
            <h4>Todo</h4>
          </div>
          {column.tickets.map((ticket) => (
            <Ticket />
          ))}
        </div>
      ))}
    </div>
  );
}
