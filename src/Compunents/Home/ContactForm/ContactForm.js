import React from 'react';
import { useForm } from "react-hook-form";
import './ContactForm.css'
const ContactForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contact-bg" id="home">
            <div className="container ">
                <div className="row py-5">
                    <div className="col-md-6 col-12">
                        <h2>Let us handle your project, <br/> professionally.</h2>
                        <small>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</small>
                    </div>
                    <div className="col-md-6 col-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <input className="form-control mt-3" placeholder="Your Email Address" name="Email" type="email" ref={register} />
                            
                            <input className="form-control mt-3" placeholder="Your name/company name" name="name" type="text" ref={register({ required: true })} />
                            {errors.name && <span>This field is required</span>}
                            
                            <textarea className="form-control mt-3" rows="7" placeholder="message" name="message" ref={register} ></textarea>
                            
                            <input type="submit" value="send" className="btn btn-dark mt-2" />
                            </form>
                    </div>
                </div>
                <div className="row text-center py-4 d-flex justify-content-center">
                    <small>copyright Orange labs 2020</small>
                </div>
        </div>
        </div>
    );
};

export default ContactForm;