import "./signin.css";

import React, { Component } from "react";
/* import { Redirect } from "react-router-dom"; */
import { Link } from "react-router-dom";
/* import "firebase/auth"; */

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      limit: 10
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.captcha = this.captcha.bind(this);
    this.clickChange =this.clickChange.bind(this);
  }

  handleChange(event) {
    this.setState({ phone: event.target.value });
  }

 

  handleClick(event) {
    debugger;
    event.preventDefault();
    /* let recaptcha = this.captcha();
    var number = "+91" + this.state.phone;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        /* const confirmationResult = undefined; */
        /* var code = prompt("Enter the otp", "");
        
        if (code === "") {
          code = "######";
        }
        e.confirm(code)
          .then(function (result) {
            console.log(result.user);
            alert("Number Verified");
            window.location.reload(false);
          })
          .catch(function (error) {
            console.error(error);
            alert("Wrong OTP");
            window.location.reload(false);
          });
          document.querySelector('label').textContent ="Valid Number";
          <Redirect to="/otp"/>
      })
      .catch(function (error) {
        console.error(error);
        document.querySelector('label').textContent ="Enter Valid Number";
      }); */
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  clickChange(){
    document.querySelector('label').textContent ="";
  }

  render() {
    const {phone, limit}=this.state;
    return (
      <form onSubmit={this.handleClick}>
        <div className="signin">
          <h3>Sign in to continue</h3>
          <label style={{ color: "red" }}></label>
          <br />
          <br />
          <p className="text">Enter Your Mobile Number</p>
          <span className="text">+91</span>
          <input
            type="text"
            value={this.state.phone}
            onChange={this.handleChange}
            onClick={this.clickChange}
            ref={(input) => {
              this.nameInput = input;
            }}
            minLength="10"
            maxLength="10"
            autoComplete="off"
            className="mobileField"
          />
          <center>
            <p className="line"></p>
          </center>
          <div id="recaptcha"></div>
          <p className="text">or</p>
          <Link to="/signup" style={{textDecorationColor:"#fff"}}>
          <p className="text">Already registered with email?</p>
          </Link>
          {(limit===phone.length)&&
          <Link to="/otp">
          <input
            type="submit"
            value="SUBMIT"
            className="btn btn-secondary btn-lg sub"
          />
          </Link>
          }
        </div>
      </form>
    );
  }
}
