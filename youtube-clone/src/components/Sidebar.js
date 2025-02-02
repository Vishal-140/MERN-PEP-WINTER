import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SideBar.module.css';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.mainLinks}>
        <li>
          <i class="ri-home-4-fill"></i>
          <Link to="##">Home</Link>
        </li>
        <li>
          <i class="ri-video-line"></i>
          <Link to="##">Shorts</Link>
        </li>
        <li>
          <i class="ri-youtube-line"></i>
          <Link to="##">Subscriptions</Link>
        </li>
      </ul>
      <div className={styles.line}></div>
      <div className={styles.subscription}>
        <ul>
          <li>
            <i class="ri-history-line"></i>
            <Link to="##">History</Link>
          </li>
          <li>
            <i class="ri-play-list-add-line"></i>
            <Link to="##">Playlists</Link>
          </li>
          <li>
            <i class="ri-video-line"></i>
            <Link to="##">Your videos </Link>
          </li>
          <li>
            <i class="ri-graduation-cap-line"></i>
            <Link to="##">Your courses</Link>
          </li>
          <li>
            <i class="ri-time-line"></i>
            <Link to="##">Watch Later</Link>
          </li>
          <li>
            <i class="ri-heart-line"></i>
            <Link to="##">Liked videos</Link>
          </li>
        </ul>
      </div>
      <div className={styles.line}></div>

      {/* subscription */}
      <div className={styles.subscription}>
        
        <ul>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 1</Link>
          </li>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 2</Link>
          </li>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 3 </Link>
          </li>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 4</Link>
          </li>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 5</Link>
          </li>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 6</Link>
          </li>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 7</Link>
          </li>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 8</Link>
          </li>
          <li>
          <i class="ri-checkbox-blank-circle-line"></i>
            <Link to="##">Channel 9</Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default SideBar;