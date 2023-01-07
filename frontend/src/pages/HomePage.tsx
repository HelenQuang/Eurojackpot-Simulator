import { useState } from "react";
import TicketList from "../components/game/tickets/TicketList";
import TicketSelect from "../components/game/numbers/TicketSelect";
import ticketModel from "../models/ticketModel";

const HomePage = () => {
  const [newTickets, setNewTickets] = useState<ticketModel[]>([]);

  return (
    <>
      <h2>Basic Game</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TicketList newTickets={newTickets} setNewTickets={setNewTickets} />
        <TicketSelect newTickets={newTickets} setNewTickets={setNewTickets} />
      </div>
    </>
  );
};

export default HomePage;
