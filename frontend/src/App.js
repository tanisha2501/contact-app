import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios.get("http://localhost:5000/contacts")
      .then(res => setContacts(res.data));
  };

  const addContact = () => {
    axios.post("http://localhost:5000/add", {
      name: name
    }).then(() => fetchContacts());
  };

  return (
    <div>
      <h2>Contact App</h2>

      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addContact}>Add</button>

      {contacts.map(c => (
        <p key={c._id}>{c.name}</p>
      ))}
    </div>
  );
}

export default App;
