import axios from 'axios';
import Cookies from 'js-cookie';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import AddCardIcon from '@mui/icons-material/AddCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { useGetUserInfo } from '../hooks/userHooks';
import Loader from '../components/layout/Loader';

const ProfilePage = () => {
  const isAuthenticated = Boolean(Cookies.get('isAuthenticated'));
  const { isLoading, data, isError, error } = useGetUserInfo(isAuthenticated);

  let errMessage;
  if (axios.isAxiosError(error) && error.response) {
    errMessage = error.response.data.message;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
      }}
    >
      <h2>User Profile</h2>

      {isLoading && <Loader />}
      {isError && <p>{errMessage}</p>}

      {data && (
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.5rem',
          }}
        >
          <li
            style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            <AccountCircleIcon />
            Name: {data.data.data.name}
          </li>
          <li
            style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            <EmailIcon />
            Email: {data.data.data.email}
          </li>
          <li
            style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            <SportsEsportsIcon />
            <span>Total play: {data.data.data.lotteries.length} games</span>
          </li>
          <li
            style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            <PaidIcon />
            <span>Current game account: {data.data.data.gameAccount} €</span>
          </li>
          <li
            style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            <AddCardIcon />
            <span>
              Total topup:{' '}
              {data.data.data.transaction
                .map((transaction: { amount: number }) => {
                  return transaction.amount;
                })
                .reduce(
                  (accumulator: number, currentValue: number) =>
                    accumulator + currentValue,
                  0
                )}{' '}
              €
            </span>
          </li>
          <li
            style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            <CreditScoreIcon />
            <span>
              Total win:{' '}
              {data.data.data.lotteries
                .map((ticket: { prize: number }) => {
                  return ticket.prize;
                })
                .reduce(
                  (accumulator: number, currentValue: number) =>
                    accumulator + currentValue,
                  0
                )}{' '}
              €
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfilePage;
