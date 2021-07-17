import React,{useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {

    const [successMessage,setSuccessMessage]=useState("");
    const{ register, handleSubmit, formState:{errors}}= useForm();

    const serviceid = "service_ID";
    const templateid = "Portfolio temp";
    const userid = "user_c5bnoYqe8DPmalGnK3YGS";

    const onSubmit = (data,r)=>{
        sendEmail(serviceid,templateid,{
            name:data.name,
            phone:data.phone,
            email:data.email,
            subject:data.subject,
            description:data.decription
        },userid)
        r.target.reset();
    }

    const sendEmail = (serviceid, templateid, variables, userid) => {
        emailjs.send(serviceid, templateid, variables, userid)
          .then(() => {
              setSuccessMessage("Form Submitted Successfully. I'll Contact you as soon as possible!");
          }).catch(err=> console.error(`Something went wrong ${err}`));
      }


    return (
        <div className="contacts">
            <div className="text-center">
             <h1>contact me</h1>
            <p>Fill in the Details to Contact me regarding anything</p>  
            <span className="successmsg">{successMessage}</span> 
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                        {/*input name*/}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("name", {
                                required: "Please enter your name",
                                maxLength: {
                                value: 20,
                                message:
                                    "Please enter a name with fewer than 20 characters",
                                },
                            })}
                            />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>

                         {/*input Phone*/}                       
                         <div className="text-center">
                        <input id="phone" type ="text" className="form-control" placeholder="Phone Number" name="phone" 
                        aria-invalid={errors.phone ? "true" : "false"}
                        {...register("phone", {
                            required: "Please enter your Phone Number",
                            
                        })}></input>
                        <div className="line"></div>                            
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        {/*input email*/}                        
                        <div className="text-center">
                        <input id="email" type ="text" className="form-control" placeholder="Email ID" name="email" 
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email", {
                            required: "Please enter your Email",
                            pattern:{
                                value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                                message:"Inavlid Email"
                            }

                        })}></input>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                            {/*input subject*/}                        
                            <div className="text-center">
                        <input id="subject" type ="text" className="form-control" placeholder="Subject" name="subject"
                        aria-invalid={errors.subject ? "true" : "false"}
                        {...register("subject", {
                            required: "Please enter your subject"
                            

                        })}></input>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
    
                    </div>
                    <div className="col-md-6 col-xs-12">
                            {/*description*/}                    
                            <div className="text-center">
                        <textarea id="description" type ="text" className="form-control" placeholder="Description" name="description"
                        aria-invalid={errors.description ? "true" : "false"}
                        {...register("description", {
                            required: "Briefly Describe your reason for contacting..."
                            

                        })}></textarea>
                        <div className="line"></div>
                            </div>
                            <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
            
        </div>
    )
}

export default Contacts
