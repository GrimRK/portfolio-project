import React from "react";
import {FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import {Link} from "react-scroll";
const Footer = () => {
    

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 text-center">
                        <div className="d-flex">
                            <p>Copyright &copy; 2021 GrimRK</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 text-center">
                        <ul >
                            <Link smooth={true} to="home" href="/#" ><FaChevronCircleUp/></Link>
                        </ul>
                        
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 texty">
                        <ul >
                            <li><a href="https://github.com/GrimRK" rel="noopener noreferrer" target="_blank" ><FaGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/aman-kumar-50019b19a/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
