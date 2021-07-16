import React from "react";
import author from "../me.jpg";
const Aboutme = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author" />
                    </div>
                    
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-head">About Me.</h1>
                    <p>Hi! I am Aman Kumar. I have been working on projects regarding web development and Machine learning from 1st Year.
                        
                        I have a good grip on programming languages like C/C++, Python, PHP, MySQL, Javascript.
                        
                        I have done few personal projects on Machine learning and Developing Websites also. </p>
                </div>
            </div>
            
        </div>
    )
}

export default Aboutme
