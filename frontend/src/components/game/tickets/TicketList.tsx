import TicketItem from "./TicketItem";

const ticketListExample: any[] = [
  { id: "1", mainNum: [1, 2, 3, 4, 5], starNum: [6, 7] },
  { id: "2", mainNum: [11, 12, 13, 14, 15], starNum: [3, 7] },
  { id: "3", mainNum: [21, 22, 23, 24, 25], starNum: [6, 8] },
  { id: "4", mainNum: [31, 32, 33, 34, 35], starNum: [6, 8] },
  { id: "5", mainNum: [41, 42, 43, 44, 45], starNum: [2, 9] },
  { id: "6", mainNum: [8, 17, 26, 39, 49], starNum: [4, 5] },
  { id: "7", mainNum: [21, 22, 23, 24, 25], starNum: [6, 8] },
  { id: "8", mainNum: [31, 32, 33, 34, 35], starNum: [6, 8] },
  { id: "9", mainNum: [41, 42, 43, 44, 45], starNum: [2, 9] },
  { id: "10", mainNum: [8, 17, 26, 39, 49], starNum: [4, 5] },
];

const TicketList = () => {
  return (
    <div>
      {ticketListExample.length === 0 && <p>Please select a ticket</p>}
      {ticketListExample.length === 1 && (
        <h4>{ticketListExample.length} ticket</h4>
      )}
      {ticketListExample.length > 1 && (
        <h4>{ticketListExample.length} tickets</h4>
      )}

      {ticketListExample.length > 0 &&
        ticketListExample.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
    </div>
  );
};

export default TicketList;
