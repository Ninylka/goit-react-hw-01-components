
import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import { generateColors, TitleStats, ContainerStates} from './Statistics/Statistics.styled'
import friends from './FriendList/friends.json'
import { FriendList } from './FriendList/FriendList';
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
export const App = () => {
const statsColors = generateColors(data)
  return (
    <div>
      <Profile card={user}/>
      <ContainerStates>
      <TitleStats>UPLOAD STATS</TitleStats>
      <Statistics stats={statsColors}/>
      </ContainerStates>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
 