import React, {useState } from 'react'
import { authentication } from './firebase'
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { Redirect } from 'react-router-dom';

import './signup.css'


export default function SignUp() {

    const [data, setData] = useState();
    const [fbData, setFbData] = useState();
    const [validating,setValidating] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
   
    
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then(res => {
                console.log(res)
                setData(res.user.displayName)
            })
            .catch(err => {
                console.log(err)
            })
    }

     localStorage.setItem("UserName",data)
    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
            .then(res => {
                console.log(res)
                setFbData(res.user.displayName)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const emailValidation = (e) => {
        e.preventDefault()
        let emailEL = document.getElementById("email");
        let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        setValidating(false)
        document.getElementById("emailMsg").textContent = "";
        document.getElementById("success").textContent = "";
        if (emailEL.value === "")
            document.getElementById("emailMsg").textContent = "Please enter your Email";

        else if (!(emailValidation.test(emailEL.value)))
            document.getElementById("emailMsg").textContent = "enter valid email*";

        else if ((emailValidation.test(emailEL.value))) {
            document.getElementById("success").textContent = "Success!!!!";
            setData(true);
            return true;
        }
        
        return false;
    }
    const handleBlur = () => {
        if (document.getElementById("email").value === "") {
            return setValidating(true)
        }
        else {
            return setValidating(false)
        }
    };

    const handleOnChange = () => {

        setIsChecked(!isChecked);

    };

    
   
        
   return (
        <div className="index container">
            <center>
                <form>
                    {data ? <h2 className="text-center message"> Welcome {data}</h2> :
                        <h2 className="text-center message">Continue with email or social </h2>
                    }
                    {data && <Redirect to="/" />}
                    <br />
                    <div className="form-group">
                        <h4 className="form-label">Enter your Email Id</h4>
                        
                    </div>
                    <div className="form-check">
                        <input
                            type="email"
                            autoComplete="off"
                            className="mobileField"
                            onBlur={handleBlur}
                            id="email"
                        />
                        <br />
                        <h1 style={{ color: "green", textAlign: "center" }} id="success"></h1>
                        {/* {setSuccess && <Redirect to ="/tvShows"/>} */}
                        <div>
                            <p id="emailMsg" style={{ color: "red" }}></p>
                            {validating === true ? <h5>Please enter your Email</h5> : null}
                        </div>
                        <br />
                        <label className="form-check-label" for="exampleCheck1">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" checked={isChecked} onChange={handleOnChange}/>
                            I am above 18 years of age and have read and hereby accept the
                            <span className="message"> Terms of Use </span> and
                            <span className="message"> Privacy Policy</span>
                        </label>
                    </div>
                    <br />
                    <button type="submit"  disabled={!isChecked} onClick={emailValidation} className="btn btn-secondary btn-lg btn-block">Submit</button>
                    
                    
                </form>
                <p>Or sign in with </p>
                <button className="btn btn-primary btn-block btn-lg br-20 m-2" onClick={signInWithGoogle}><span style={{ marginRight: "5px",alignItems:"center",justifyContent:"center" }}><svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">

                    <g fill="#000" fill-rule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g></svg></span>Google</button>
                <button className="btn btn-primary btn-lg br-20 m-2" onClick={signInWithFacebook}><span style={{ marginRight: "2px",alignItems:"center",justifyContent:"center" }}><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='30' height='30'><path fill='#3F51B5' d='M42 37a5 5 0 01-5 5H11a5 5 0 01-5-5V11a5 5 0 015-5h26a5 5 0 015 5v26z' /><path fill='#FFF' d='M34.368 25H31v13h-5V25h-3v-4h3v-2.41c.002-3.508 1.459-5.59 5.592-5.59H35v4h-2.287C31.104 17 31 17.6 31 18.723V21h4l-.632 4z' /></svg></span> Facebook</button>

            </center>
        </div>
    )
}
