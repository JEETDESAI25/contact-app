import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./contactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email: "nicks@gmail.com",
    },
    {
      id: "2",
      name: "Nipesh",
      email: "malvia@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
