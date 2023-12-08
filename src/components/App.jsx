import { user } from '../user';
import { data } from '../user';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

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
    </div>
  );
};
