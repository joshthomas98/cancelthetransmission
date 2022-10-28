import React, { useEffect, useState } from "react";

const Contact = () => {
  const [firstName, setfirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userContact = { firstName, surname, email, subject, message };

    fetch("http://127.0.0.1:8000/admin/cttbackend/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userContact),
    }).then(() => {
      console.log("new message sent");
    });
  };

  return (
    <div className="create text-light p-5">
      <h2 className="text-light text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <label>Surname:</label>
        <input
          type="text"
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Subject:</label>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label>Message:</label>
        <input
          type="text"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="button mt-3">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
