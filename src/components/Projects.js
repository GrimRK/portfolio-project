import React from "react";
import blueblus from "../bluebus.png";
import verzeo from "../course1.jpg";
/*-----------fontawesome-----------*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
/*-----------fontawesome-----------*/
import {PopupboxManager,PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"

const Projects = () => {

//bluebus
const openpopupboxbus = () =>{
    const content=(
     <>
    <img className="pbox-image" src={blueblus} alt="blubus project" />
    <p>In this project using custom small database and records of schedule and busstops of random location we created a bus booking system with user login/register system and encrypted password storing.
        Project was done in PHP,MySQL,HTML,CSS.
    </p>
    <b>Github : </b><a className="hyper-link" onClick={()=>window.open("https://github.com/GrimRK/Bus-Booking-System-in-Xampp")}>https://github.com/GrimRK/Bus-Booking-System-in-Xampp</a>
   
    </>   
    )
     PopupboxManager.open({content});
}

const openpopupboxcourse = () =>{
    const content=(
     <>
    <img className="pbox-image" src={verzeo} alt="ML project" />
    <p>Completed the 2 month course/Internship and developed a model which predicts whether it would rain tomorrow or not on the basis of the data provided for training.
        The data was raw thus we had to clean it first before using .
    </p>
    <b>Github : </b><a className="hyper-link" onClick={()=>window.open("https://github.com/GrimRK/Rainfall-Prediction")}>https://github.com/GrimRK/Rainfall-Prediction</a>
   
    </>   
    )
     PopupboxManager.open({content});
}


const popupboxconfigbus ={
    titleBar:{
        enable:true,
        text: "BlueBus - A Bus Booking Website "
    },
    fadeIn:true,
    fadInSpeed:500
}
const popupboxconfigverzeo ={
    titleBar:{
        enable:true,
        text: "Verzeo - Machine Learning with Python "
    },
    fadeIn:true,
    fadInSpeed:500
}
    return (
        <div id="projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5 pncheader">Projects And Courses</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box col-md-5" onClick={openpopupboxbus}> 
                    <img className="portfolio-image" src={blueblus} alt="blubus project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="sicon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box col-md-5" onClick={openpopupboxcourse}>
                        <img className="portfolio-image" src={verzeo} alt="ML with python" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="sicon" icon={faSearchPlus} />
                    </div>
                    
                    
                </div>
            </div>
            <PopupboxContainer {...popupboxconfigbus} />
            <PopupboxContainer {...popupboxconfigverzeo} />
        </div>
    )
}

export default Projects
