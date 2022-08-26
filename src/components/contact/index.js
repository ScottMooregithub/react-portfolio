import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
 
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("invalid information");
      return;
    }

    if (!setMessage(message)) {
      setErrorMessage("a message is required");
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section>
      <div>
        <h2>Contact</h2>
      </div>

      <div>
        <div>
          <h3>Hello {userName}</h3>
          <p>Reach out to me</p>
          <address>
            Rohnert Park, CA <br />
            Cell: <a href="tel:707.321.4638">707.321.4638</a>
            <br />
            Email:{" "}
            <a href="mailto: sm91srjc@gmail.com">
              sm91srjc@gmail.com
            </a>
          </address>
        </div>

        <div>
          <h3>Contact Me</h3>
          <form className="contact-form">
            <label for="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            <label for="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;