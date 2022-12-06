import TicketList from "../components/game/tickets/TicketList";
import TicketSelect from "../components/game/numbers/TicketSelect";

const HomePage = () => {
  return (
    <>
      <h2>Basic Game</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <TicketList />
        <TicketSelect />
      </div>
    </>
  );
};

export default HomePage;
