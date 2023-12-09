import React from 'react';
import cn from 'classnames';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={cn(css.friend)}>
      <ul className={cn(css.friendList)}>
        {Array.isArray(friends) &&
          friends.map(({ avatar, name, isOnline, id }) => (
            <li className={cn(css.item)} key={id}>
              <span className={cn(isOnline ? css.online : css.offline)}></span>
              <img
                className={cn(css.avatar)}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={cn(css.name)}>{name}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};
