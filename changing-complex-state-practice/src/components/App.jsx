import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = function (e) {
    const { value, name, email } = e.target;
    return setContact((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      }
      if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      }
      if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
