import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";

export default function Board() {
  return (
    <div className="board">
      <div className="board-column">
        <div className="boars-title">
          <div className="board-title icon">
            <h4>Done</h4>
          </div>
        </div>
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <Ticket />
        <Ticket />
      </div>
      <div className="board-column">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
}
