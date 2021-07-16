import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: '#fff' }}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Skills</a>
      </li>      
      <li className="nav-item">
        <a className="nav-link" href="/#">Projects and Courses</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Contact</a>
      </li>

    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
