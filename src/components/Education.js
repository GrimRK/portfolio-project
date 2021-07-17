
import React from "react"

const Education = () => {
    return (
        <div id="education" className="education">
            <div className="py-5">
                <div className="container">
                    <h1 className="edu-head">Education</h1><br></br>
                    <div className="row">                    
                    <div className="col-md-6 col-sm-6"> 
                    <div className="box">
                      <p className="timestamp">June 2019 - Present</p> 
                        <h4>Sardar Vallabhbhai National Institute of Technology, Surat</h4>
                       
                        <p>Bachelor of Technology in Computer Science and Engineering</p>
                                            
                        <b>CGPA : </b>8.73(as of July 2021)  
                    </div> 
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="box">
                            <p className="timestamp">April 2015 - September 2018</p>
                        <h4>New Horizon Public School, Panvel</h4>
                        <p>School</p>
                        <p><b>10th Board CBSE : </b>9.2 CGPA</p>
                        <p><b>12th Board CBSE : </b>85.2%</p>
                        </div>    
                    </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Education
