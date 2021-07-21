import React from "react";
import Typed from "react-typed";
import axios from "axios";
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
                <a href="https://drive.google.com/u/0/uc?id=1i7ywnMs_iyX37dOqfSlYpwhR6tagyGMv&export=download" download="resume.pdf" target="_blank" className="btn-main-offer" >Download Resume</a>
            </div>
            
        </div>
    )
}

export default Header
