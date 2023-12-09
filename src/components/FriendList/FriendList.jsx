import cn from 'classnames';
import css from './FriendList.module.css';
import {FriendListItem} from '../FriendsListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <section className={cn(css.friend)}>
      <ul className={cn(css.friendList)}>
        {Array.isArray(friends) &&
          friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
          ))}
      </ul>
    </section>
  );
};
