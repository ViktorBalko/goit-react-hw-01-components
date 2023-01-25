import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
 return (
  <li className={styles.item}>
   <span
    className={styles.status}
    style={isOnline ? { backgroundColor: 'rgb(19 55 1)' } : { backgroundColor: 'rgb(50 2 2)' }}
   ></span>
   <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
   <p className={styles.name}>{name}</p>
  </li>
 );
}

FriendsListItem.propTypes = {
 avatar: PropTypes.string.isRequired,
 name: PropTypes.string.isRequired,
 isOnline: PropTypes.bool.isRequired,
};
