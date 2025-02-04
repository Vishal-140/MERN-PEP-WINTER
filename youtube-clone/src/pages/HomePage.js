import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import styles from '../styles/HomePage.module.css'
import SearchResults from './SearchResults';

function HomePage() {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className={styles.homepage}>
            <NavBar onSearchResults={setSearchResults} />
            <div className={styles.content}>
                <Sidebar />
                <SearchResults results={searchResults} />
            </div>
        </div>
    )
}

export default HomePage