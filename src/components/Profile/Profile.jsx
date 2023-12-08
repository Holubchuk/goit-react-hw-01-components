import React from 'react';
import css from './Profile.module.css';
import cn from 'classnames';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
  className = ''
}) => {
  return (
    <div className= {cn(css.profile)}>
      <div className= {cn(css.description)}>
        <img src={avatar} alt="User avatar" className= {cn(css.avatar)} />
        <p className= {cn(css.name)}>{username}</p>
        <p className= {cn(css.tag)}>@{tag}</p>
        <p className= {cn(css.location)}>{location}</p>
      </div>

      <ul className= {cn(css.stats)}>
        <li className= {cn(css.statsItem)}>
          <span className= {cn(css.label)}>Followers</span>
          <span className= {cn(css.quantity)}>{followers}</span>
        </li>
        <li className= {cn(css.statsItem)}>
          <span className= {cn(css.label)}>Views</span>
          <span className= {cn(css.quantity)}>{views}</span>
        </li>
        <li className= {cn(css.statsItem)}>
          <span className= {cn(css.label)}>Likes</span>
          <span className= {cn(css.quantity)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
