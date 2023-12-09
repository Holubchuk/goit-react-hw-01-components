import { user, data, friends, transactions } from '../user';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './TransactionHistor/TransactionHistor';

export const App = () => {
  return (
    <div style={{ backgroundColor: '#eef2ef' }}>
      <h2 style={{ textAlign: 'center' }}>TASK 1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 style={{ textAlign: 'center' }}>TASK 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2 style={{ textAlign: 'center' }}>TASK 3</h2>
      <FriendList friends={friends} />
      <h2 style={{ textAlign: 'center' }}>TASK 4</h2>
      <Transactions items={transactions} />
    </div>
  );
};
