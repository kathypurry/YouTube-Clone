import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// import About from "./About";
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import SearchIcon from "@material-ui/icons/Search";


const Header = () => {
    const [ isLabelled, setIsLabelled ] = useState(false);
    const [ isInfo, setIsInfo] = useState(false);

    const styles = {
        fontFamily: "Roboto, Arial, sans-serif",
        color: "black",
        textDecoration: "none",
        fontSize: "12px",

    }


    return (
        <div className="header">
        <Link to ="/">
        <img
		    className="youtube-logo"
		    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
		    alt="YouTube logo"
            onMouseEnter={() => setIsLabelled(true)}
            onMouseLeave={() => setIsLabelled(false)}
		/>
            {isLabelled && (
                <p style={styles}>
                    Home
                </p>
        )}

        </Link>

        <div className="header-search">
            <input
                type="text"
                placeholder="Search"
            />
            <SearchIcon className="search-icon"/>
        </div>

        <div className="icon-links">
            <a href="https://github.com/kathypurry"
                  target="_blank"
                  rel="noreferrer">
                <img
                    className="github-icon"
                    src="https://avatars.githubusercontent.com/u/21033013?v=4"
                    alt=""
                />
            </a>
            <a href="https://github.com/AlekiChrome"
                  target="_blank"
                  rel="noreferrer">
                <img
                    className="github-icon"
                    src="https://avatars.githubusercontent.com/u/47721785?v=4"
                    alt=""
                />
            </a>
            <Link to="/about">
            <InfoSharpIcon
                 onMouseEnter={() => setIsInfo(true)}
                 onMouseLeave={() => setIsInfo(false)}
            />
                  {isInfo && (
                <p style={styles}>
                    About
                </p>
        )}
            </Link>
        </div>
        </div>
    )
}

export default Header;
