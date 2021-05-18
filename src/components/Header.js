import React from "react";
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
            <input type="text"/>
            <SearchIcon />
        </div>

        </div>
    )
}

export default Header;
