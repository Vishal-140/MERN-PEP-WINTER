import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import ytLogo from "../assets/ytLog.webp";

const API_KEY = "4334cf89c2msh8bb2842ca1bc925p14d540jsn5476cbded4a8";
// const API_KEY = "f022da7c9amsh93230c067957bd4p1ecaa5jsndbc2fb271ad4";
// const API_KEY = "AIzaSyAV1Oq_j157W2dA7E6O56ysKNscA3GSM90";

function NavBar({ onSearchResults }) {
    const [searchText, setSearchText] = useState("");

    const getData = async (txt) => {
        try {
            const options = {
                headers: {
                    "x-rapidapi-host": "youtube-v2.p.rapidapi.com",
                    "x-rapidapi-key": API_KEY,
                },
            };
            const res = await fetch(
                `https://youtube-v2.p.rapidapi.com/search/?query=${txt}`,
                options
            );
            const dataObj = await res.json();
            onSearchResults(dataObj.videos);
        } catch (err) {
            console.log(err);
            alert("Oops... Something went wrong!");
        }
    };

    const handleSearch = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            getData(searchText);
        }
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navleft}>
                <img src={ytLogo} alt="YouTube Logo" />
            </div>
            <div className={styles.navsearch}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleSearch}
                />
                <i className="ri-search-line" onClick={handleSearch}></i>{" "}
            </div>
            
            <div className={styles.navright}>
                <ul>
                    <li>
                        <Link to="#"><i className="ri-add-line"></i> Create</Link>
                    </li>
                    <li>
                        <Link to="#"><i class="ri-notification-4-line"></i></Link>
                    </li>
                    <li>
                        <Link to="#"><i class="ri-account-circle-line"></i></Link>
                    </li>
                </ul>
            </div>


        </div>
    );
}

export default NavBar;
