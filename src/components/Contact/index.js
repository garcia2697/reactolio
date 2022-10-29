// import React, { useState } from "react";
import React from "react";
// import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [errorMessage, setErrorMessage] = useState("");
  // const { name, email, message } = formState;

  // // validates submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log("Submit Form", formState);
  //   }
  // };

  // // validates email
  // const handleChange = (e) => {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //     console.log("Handle Form", formState);
  //   }
  // };

  return (
    <section>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
      <h3>
        Email:
        <a href="mailto:lougarcia2697@gmail.com"> lougarcia2697@gmail.com</a>
      </h3>
      <br></br>
      <h3>
        LinkedIn:
        <a href="https://www.linkedin.com/in/luis-g-garcia-/">
          {" "}
          https://www.linkedin.com/in/luis-g-garcia-/
        </a>
      </h3>

      {/* <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="">
            Name:
          </label>{" "}
          <br></br>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <br></br>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label> <br></br>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
      <div></div> */}
    </section>
  );
}

export default ContactForm;
