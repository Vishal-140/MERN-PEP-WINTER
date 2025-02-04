import React from 'react';
import styles from '../styles/SearchResults.module.css';
import { Link } from 'react-router-dom';

function SearchResults({ results }) {
    return (
        <>
            <div className={styles.chips_content}>
                <ul>
                    <li><Link to="##">All</Link></li>
                    <li><Link to="##">Music</Link></li>
                    <li><Link to="##">Live</Link></li>
                    <li><Link to="##">Javascript</Link></li>
                    <li><Link to="##">Computer</Link></li>
                    <li><Link to="##">Space</Link></li>
                    <li><Link to="##">History</Link></li>
                    <li><Link to="##">Playlists</Link></li>
                    <li><Link to="##">Your videos</Link></li>
                    <li><Link to="##">Your courses</Link></li>
                    <li><Link to="##">Watch Later</Link></li>
                    <li><Link to="##">Liked videos</Link></li>
                    <li><Link to="##">Space</Link></li>
                    <li><Link to="##">History</Link></li>
                    <li><Link to="##">Playlists</Link></li>
                    <li><Link to="##">Your videos</Link></li>
                    <li><Link to="##">Your courses</Link></li>
                    <li><Link to="##">Watch Later</Link></li>
                    <li><Link to="##">Liked videos</Link></li>
                </ul>
            </div>

            <div className={styles.resultsContainer}>
                {results.map((video) => (
                    <div 
                        key={video.video_id} 
                        className={styles.videoCard} 
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.video_id}`, "_blank")}
                    >
                        <img src={video.thumbnails[0].url} alt={video.title} />
                        <div className={styles.videoInfo}>
                            <p>{video.title}</p>
                            <p className={styles.channelName}>{video.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SearchResults;
