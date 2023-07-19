import React, { useState, useRef } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

import styles from "./Form.module.css";

const Form = (props) => {
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nameInputHandler = () => {
    const value = nameRef.current.value;
    setFirstName(value);
  };

  const lastNameInputHandler = () => {
    const value = lastNameRef.current.value;
    setLastName(value);
  };

  const emailInputHandler = () => {
    const value = emailRef.current.value;
    setEmail(value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (firstName && lastName && email) {
      props.onSubmit("Congrats! Your account has been submitted!");
    } else {
      props.onSubmit("Please fill out the form");
    }
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <input
          ref={nameRef}
          type="text"
          name="first_name"
          id="first_name "
          placeholder="Your First Name"
          onChange={nameInputHandler}
        />
        {!firstName && submitted ? (
          <span className={styles.error}>Please Enter Your First Name</span>
        ) : null}
        <input
          ref={lastNameRef}
          type="text"
          name="last_name"
          id="last_name "
          placeholder="Your Last Name"
          onChange={lastNameInputHandler}
        />
        {!lastName && submitted ? (
          <span className={styles.error}>Please Enter Your Last Name</span>
        ) : null}

        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          onChange={emailInputHandler}
        />
        {!email && submitted ? (
          <span className={styles.error}>Please Enter Your Email</span>
        ) : null}

        <Button type="submit">Sign Up</Button>
      </form>
    </Card>
  );
};

export default Form;
