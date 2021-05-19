import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import About from "./About";
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import SearchIcon from "@material-ui/icons/Search";


const Header = () => {
    return (
        <div className="header">

<       img
		    className="youtube-logo"
		    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
		    alt="YouTube logo"
		/>

        <div className="header-search">
            <input
                type="text"
                placeholder="Search"
            />
            <SearchIcon className="search-icon"/>
        </div>

        <div className="github-link">
            <a href="https://github.com/kathypurry"
                  target="_blank">
                <img
                    className="github-icon"
                    src="https://avatars.githubusercontent.com/u/21033013?v=4"
                />
            </a>
            <a href="https://github.com/AlekiChrome"
                  target="_blank">
                <img
                    className="github-icon"
                    src="https://avatars.githubusercontent.com/u/47721785?v=4"
                />
            </a>
            <InfoSharpIcon />
        </div>
        </div>
    )
}

export default Header;
