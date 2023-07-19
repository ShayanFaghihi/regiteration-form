import React, { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const submitMessageHandler = (message) => {
    setMessage(message);
  };
  return (
    <section className="container">
      <h1>Registration Form</h1>
      {message ? <span className="message">{message}</span> : null}
      <Form onSubmit={submitMessageHandler} />
    </section>
  );
}

export default App;
