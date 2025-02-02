import React from 'react';
import { Link } from 'react-router'
import styles from '../styles/VideoContainer.module.css';
import VideoCard from './VideoCard';

function VideoContainer() {
  return (
    <div className={styles.videoContainer}>

      <div className={styles.chips_content}>
        <ul>
          <li><Link to="##">All</Link></li>
          <li><Link to="##">Music</Link></li>
          <li><Link to="##">Live </Link></li>
          <li><Link to="##">Javascript </Link></li>
          <li><Link to="##">Computer</Link></li>
          <li><Link to="##">Space</Link></li>
          <li><Link to="##">History</Link></li>
          <li><Link to="##">Playlists</Link></li>
          <li><Link to="##">Your videos</Link></li>
          <li><Link to="##">Your courses</Link></li>
          <li><Link to="##">Watch Later</Link></li>
          <li><Link to="##">Liked videos</Link></li>
          <li><Link to="##">Live </Link></li>
          <li><Link to="##">Javascript </Link></li>
          <li><Link to="##">Computer</Link></li>
          <li><Link to="##">Space</Link></li>
          <li><Link to="##">History</Link></li>
        </ul>
      </div>


      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />


      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />


      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />


      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />


      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />



      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />



      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />


      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />


      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />


      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />

      <VideoCard
        thumbnail="https://images.unsplash.com/photo-1523365280197-f1783db9fe62?w=800&auto=format&fit=crop&q=60"
        title="Sample Video Title"
        views="1.2M views"
        timestamp="2 days ago"
      />
    </div>
  );
}

export default VideoContainer;
