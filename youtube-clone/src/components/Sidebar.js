import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SideBar.module.css';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.mainLinks}>
        <li><Link to="##">Home</Link></li>
        <li><Link to="##">Shorts</Link></li>
        <li><Link to="##">Subscriptions</Link></li>
      </ul>
      <div className={styles.line}></div>
      <div className={styles.subscription}>
        <ul>
          <li><Link to="##">History</Link></li>
          <li><Link to="##">Playlists</Link></li>
          <li><Link to="##">Your videos </Link></li>
          <li><Link to="##">Your courses</Link></li>
          <li><Link to="##">Watch Later</Link></li>
          <li><Link to="##">Liked videos</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
