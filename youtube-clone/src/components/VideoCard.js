import React from 'react';
import styles from '../styles/VideoCard.module.css';

function VideoCard({ thumbnail, title, views, timestamp }) {
  return (
    <div className={styles.videoCard}>
      <img src={thumbnail} alt="Video Thumbnail" className={styles.thumbnail} />
      <div className={styles.videoInfo}>
        <div className={styles.title}>{title}</div>
        <div className={styles.metadata}>
          <span>{views}</span>
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
