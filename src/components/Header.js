import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import katcandypile from "./katcandypile.png"


const Header = () => {


    return (
        <div className="header tooltip">
        <Link to ="/">
        <img
		    className="youtube-logo"
		    src={katcandypile}
		    alt="YouTube logo"
		/>
        <span className="tooltiptext">Home</span>

        </Link>

        <RefreshRoundedIcon
            onClick={() => window.location.reload(false)}
            className="about-icon"
        />

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
