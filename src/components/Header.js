import React from "react";
import Typed from "react-typed";

const Header = () => {


    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <p>Aman Kumar</p>
                <Typed
                className="typed-text"
                strings={["Web Developer","ML Enthusiast"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="https://drive.google.com/file/d/18eKJAlYBPHrWChTE02bmGZ3RexqELPGk/view" rel="noopener noreferrer"  target="_blank" className="btn-main-offer" >View Resume</a>
            </div>
            
        </div>
    )
}

export default Header
