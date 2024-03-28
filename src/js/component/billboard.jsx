import React from "react";
import Logo from "../../img/bm.png";

const Billboard = () => {
    return(
        <div className="billboard">
            <a href="https://www.linkedin.com/in/blondy-martinez/" target="_blank"><img className="billboard-img" src={Logo} alt="" /></a>
        </div>
    );
}

export default Billboard;