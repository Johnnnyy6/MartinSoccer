// ContactForm.js
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import "./ContactFormStyles.css";

function ContactForm() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = () => {
    setIsEmailValid(validator.isEmail(email));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    validateEmail();

    if (!isEmailValid) {
      return;
    }

    setMessage(true);

    emailjs
      .sendForm(
        "service_0y6chfl",
        "template_kcui9kf",
        e.target,
        "oqrOj67QyNK4cH8m2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h1>Have more questions? Reach Out to Me!</h1>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="from_name" required />
        <input
          type="text"
          placeholder="Email"
          name="from_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          style={{ borderColor: isEmailValid ? "" : "black" }}
          required
        />
        {!isEmailValid && (
          <span className="validation-message">
            Please enter a valid email address
          </span>
        )}
        <input type="text" placeholder="Subject" name="from_subject" required />
        <textarea
          placeholder="Message"
          name="message"
          rows="4"
          required
        ></textarea>
        <button type="Submit">Send Message</button>
        {message && (
          <span className="success-message">
            Thank you for reaching out, I look forward to working with you and
            will respond ASAP.
          </span>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
