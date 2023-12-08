import { user } from "user";
import { Profile } from "./Profile/Profile";


export const App = () => {
  return (
    <div style={{backgroundColor: 'azure'}}>
      <h2 style={{textAlign: 'center'}}>TASK 1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        className = ''
      />
    </div>
  );
};
