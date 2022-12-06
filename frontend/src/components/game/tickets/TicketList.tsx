import TicketItem from "./TicketItem";

const ticketListExample = [
  { id: "1", mainNum: [1, 2, 3, 4, 5], starNum: [6, 7] },
  { id: "2", mainNum: [11, 12, 13, 14, 15], starNum: [3, 7] },
  { id: "3", mainNum: [21, 22, 23, 24, 25], starNum: [6, 8] },
  { id: "4", mainNum: [31, 32, 33, 34, 35], starNum: [6, 8] },
  { id: "5", mainNum: [41, 42, 43, 44, 45], starNum: [2, 9] },
  { id: "6", mainNum: [8, 17, 26, 39, 49], starNum: [4, 5] },
];

const TicketList = () => {
  const ticketItem = ticketListExample.map((ticket) => {
    return <TicketItem key={ticket.id} ticket={ticket} />;
  });

  return (
    <div>
      <h4>{ticketListExample.length} tickets</h4>
      {ticketItem}
    </div>
  );
};

export default TicketList;
