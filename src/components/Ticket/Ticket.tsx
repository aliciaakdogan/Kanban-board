import React from "react";
import { Ticket as TicketType } from "../../context/projects-data";
import "./Ticket.scss";

type Props = {
  ticket: TicketType;
};

export default function Ticket({ ticket }: Props) {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>{ticket.description} </p>
      <p>{ticket.tasks.length} </p>
    </div>
  );
}
