import TicketItem from "./TicketItem";
import ticketModel from "../../../models/ticketModel";

const TicketList = ({ newTickets }: { newTickets: ticketModel[] }) => {
  return (
    <div>
      {newTickets.length === 0 && <p>Please select a ticket</p>}
      {newTickets.length === 1 && <h4>{newTickets.length} ticket</h4>}
      {newTickets.length > 1 && <h4>{newTickets.length} tickets</h4>}

      {newTickets.length > 0 &&
        newTickets.map((ticket: ticketModel) => (
          <TicketItem key={ticket._id} ticket={ticket} showIcon={true} />
        ))}
    </div>
  );
};

export default TicketList;
