import { user, data, friends } from '../user';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div style={{ backgroundColor: 'azure' }}>
      <h2 style={{ textAlign: 'center' }}>TASK 1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        className=""
      />
      <h2 style={{ textAlign: 'center' }}>TASK 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2 style={{ textAlign: 'center' }}>TASK 3</h2>
      <FriendList friends={friends} />;
    </div>
  );
};
