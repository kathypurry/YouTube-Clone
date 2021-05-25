import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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
		/>

        </Link>

        <div className="icon-links">
            <a href="https://github.com/kathypurry"
                  target="_blank"
                  rel="noreferrer">
                <img
                    className="github-icon inverted"
                    src="https://avatars.githubusercontent.com/u/21033013?v=4"
                    alt=""
                />
            </a>
            <a href="https://github.com/AlekiChrome"
                  target="_blank"
                  rel="noreferrer">
                <img
                    className="github-icon inverted"
                    src="https://avatars.githubusercontent.com/u/47721785?v=4"
                    alt=""
                />
            </a>
            <Link to="/about">
            <InfoSharpIcon
                className="about-icon"/>

            </Link>
        </div>
        </div>
    )
}

export default Header;
