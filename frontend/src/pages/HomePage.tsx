import { useState } from "react";
import styles from "../styles/HomePage.module.css"
import TicketList from "../components/game/tickets/TicketList";
import TicketSelect from "../components/game/numbers/TicketSelect";
import ticketModel from "../models/ticketModel";

const HomePage = () => {
  const [newTickets, setNewTickets] = useState<ticketModel[]>([]);

  return (
    <div >
      <h2>Basic Game</h2>
      <div className={styles.basicGame}>
        <TicketList newTickets={newTickets} setNewTickets={setNewTickets} />
        <TicketSelect newTickets={newTickets} setNewTickets={setNewTickets} />
      </div>
    </div>
  );
};

export default HomePage;
