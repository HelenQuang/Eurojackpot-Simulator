import MainNumberTable from "./MainNumberTable";
import StarNumberTable from "./StarNumberTable";

import { Button } from "@mui/material";
import ShuffleOnRoundedIcon from "@mui/icons-material/ShuffleOnRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const TicketSelect = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MainNumberTable />
      <StarNumberTable />
      <Button
        variant="outlined"
        type="submit"
        startIcon={<ShuffleOnRoundedIcon />}
        style={{ borderColor: "var(--purple)", color: "var(--purple)" }}
      >
        Auto-generate ticket
      </Button>
      <Button
        variant="contained"
        type="submit"
        startIcon={<ShoppingCartIcon />}
        style={{ margin: "1rem 0", backgroundColor: "var(--purple)" }}
      >
        Pay €4.00
      </Button>
    </div>
  );
};

export default TicketSelect;
