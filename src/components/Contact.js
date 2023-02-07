import React, { useState } from "react";

function Contact() {
  let [nameError, setNameError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [messageError, setMessageError] = useState("");

  // Validate name,email and message values
  function validateForm(event) {
    var target = event.target;
    var input = target.getAttribute("name");
    var value = target.value;
    if (input == "name" && value == "") {
      setNameError("Name is required");
    } else if (input == "name") {
      setNameError("");
    }
    // validate message
    if (input == "message" && value == "") {
      setMessageError("Message is required");
    } else if (input == "message") {
      setMessageError("");
    }

    // validate email
    if (input == "email" && value == "") {
      setEmailError("Email is required");
    } else if (input == "email" && validEmail(value) == true) {
      setEmailError("");
    } else if (input == "email" && validEmail(value) == false) {
      setEmailError("Valid emial is required");
    } else if (input == "email") {
      setEmailError("");
    }
  }
  function validEmail(email) {
    let valid = email
      .toString()
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (valid == null) {
      valid = false;
    } else {
      valid = true;
    }
    return valid;
  }

  return (
    <div>
      <div className="container">
        <div className="mainBody">
          <p>
            Please add the following information if you would like to get in to
            conact me.
          </p>
          <div className="formContainer">
            <form className="contactForm">
              <div className="formGroup">
                <span className="inputRequired">{nameError}</span>
                <input
                  name="name"
                  onBlur={validateForm}
                  type="text"
                  placeholder="Please enter your name"
                />
              </div>
              <div className="formGroup">
                <span className="inputRequired">{emailError}</span>
                <input
                  name="email"
                  onBlur={validateForm}
                  type="email"
                  placeholder="Please enter your email"
                />
              </div>
              <div className="formGroup">
                <span className="inputRequired">{messageError}</span>
                <textarea
                  name="message"
                  onBlur={validateForm}
                  placeholder="Please enter your message"
                ></textarea>
              </div>
              <div className="formGroup">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
