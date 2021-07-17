import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: '#fff' }}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link smooth={true} to="aboutme" offset={-60} className="nav-link" href="/#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="education" offset={-60} className="nav-link" href="/#">Education</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="projects" offset={-60} className="nav-link" href="/#">Projects and Courses</Link>
      </li>      
      <li className="nav-item">
        <Link smooth={true} to="ProLang" offset={-60} className="nav-link" href="/#">Programming Languages</Link>
      </li>      
      <li className="nav-item">
        <Link smooth={true} to="skills" offset={-60} className="nav-link" href="/#">Skills</Link>
      </li>      
      <li className="nav-item">
        <Link smooth={true} to="contactme" offset={-59} className="nav-link" href="/#">Contact</Link>
      </li>

    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
