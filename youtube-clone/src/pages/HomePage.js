import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import VideoContainer from '../components/VideoContainer'
import styles from '../styles/HomePage.module.css'

function HomePage() {
    return (
        <div className={styles.homepage}>
            <NavBar />
            <div className={styles.content}>
                <Sidebar />
                <VideoContainer />
            </div>
        </div>
    )
}

export default HomePage