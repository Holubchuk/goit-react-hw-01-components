import cn from 'classnames';
import css from './FriendListItem.module.css';

export const FriendListItem = ({id, name, avatar, isOnline}) => {
  return (
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
  )
}
