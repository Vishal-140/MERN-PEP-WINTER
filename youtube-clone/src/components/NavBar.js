import React from 'react'
import { Link } from 'react-router'
import styles from '../styles/NavBar.module.css'
import ytLogo from '../assets/ytLog.webp'

function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navleft}>
                <img src={ytLogo} alt="YouTube Logo" />
            </div>
            <div className={styles.navsearch}>
                <input type="text" placeholder='Search' />
                <i class="ri-mic-fill"></i>
            </div>
            <div className={styles.navright}>
                <ul>
                    <li><Link to="##">Create</Link></li>
                    <li><Link to="##">Bell</Link></li>
                    <li><Link to="##">Profile</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar