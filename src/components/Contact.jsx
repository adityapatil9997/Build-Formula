import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/draw2.svg';

const Contact = () => {
    let [fname, setFname] = useState("");
    let [fnamemessage, setFnamemessage] = useState("");
    let [lname, setLname] = useState("");
    let [lnamemessage, setLnamemessage] = useState("");
    let [email, setEmail] = useState("");
    let [emailmessage, setEmailmessage] = useState("");
    let [phoneno, setPhoneno] = useState("");
    let [phonemessage, setPhoneNOmessage] = useState("");
    let navigate = useNavigate();


    let validate = true;


    function submit() {

        if (fname === "") {
            setFnamemessage("please Enter Your First Name");
            validate(false);
        }
        if (lname === "") {
            setLnamemessage("please Enter Your Last Name");
            validate(false);
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailmessage("Please Enter valid Email");
            validate(false);
        }
        if (phoneno === "") {
            setPhoneNOmessage("Please Enter Phone No.");
            validate(false);
        }
        if (validate) {
            localStorage.setItem('fname', fname);
            localStorage.setItem('lname', lname);
            localStorage.setItem('email', email);
            localStorage.setItem('phoneno', phoneno);
            navigate('/');
        }

    }

    return (
        <div>
            <h1>Contact Form</h1>
            <div className="container h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src={img}
                            className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control form-control-lg" onChange={(e) => { setFname(e.target.value) }} autoComplete='off' placeholder='First Name' autoFocus />
                            <span className='text-danger'>{fnamemessage}</span>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control form-control-lg" onChange={(e) => { setLname(e.target.value) }} autoComplete='off' placeholder='Last Name' />
                            <span className='text-danger'>{lnamemessage}</span>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" className="form-control form-control-lg" onChange={(e) => { setEmail(e.target.value) }} autoComplete='off' placeholder='Email' />
                            <span className='text-danger'>{emailmessage}</span>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" className="form-control form-control-lg" autoComplete='off' onChange={(e) => { setPhoneno(e.target.value) }} placeholder='Phone No.' />
                            <span className='text-danger'>{phonemessage}</span>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(e) => submit(e)}>Submit</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
