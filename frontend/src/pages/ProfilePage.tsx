import { useEffect } from "react";
import PaidIcon from "@mui/icons-material/Paid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h2>User Profile</h2>

      {userInfo && (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem",
          }}
        >
          <li
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <AccountCircleIcon />
            Name: {userInfo.name}
          </li>
          <li
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <EmailIcon />
            Email: {userInfo.email}
          </li>
          <li
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <SportsEsportsIcon />
            <span>Total play: {userInfo.lotteries.length} games</span>
          </li>
          <li
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <PaidIcon />
            <span>Current account: {userInfo.gameAccount} €</span>
          </li>
          <li
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <AddCardIcon />
            <span>Total topup: 30 €</span>
          </li>
          <li
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <CreditScoreIcon />
            <span>
              Total win:{" "}
              {userInfo.lotteries
                .map((ticket: { prize: number }) => {
                  return ticket.prize;
                })
                .reduce(
                  (accumulator: number, currentValue: number) =>
                    accumulator + currentValue,
                  0
                )}{" "}
              €
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfilePage;
