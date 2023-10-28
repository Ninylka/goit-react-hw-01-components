
import user from '../data/user.json';
import { Profile } from './Profile/Profile';
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';
import { generateColors} from './Statistics/Statistics.styled'
import friends from '../data/friends.json'
import { FriendList } from './FriendList/FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
export const App = () => {
const statsColors = generateColors(data)
  return (
    <div>
      <Profile card={user}/>
      <Statistics title="Upload stats" stats={statsColors} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
 