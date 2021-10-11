import React, { useState } from "react";

function AddUser({ popup, setPopUp, setPeople, people }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function addUser(event) {
    event.preventDefault();
    setPeople([
      ...people,
      { first_name: firstName, last_name: lastName, email: email },
    ]);
    setFirstName("");
    setLastName("");
    setEmail("");
    // console.log(firstName, lastName, email);
    setPopUp(false);
  }
  return popup ? (
    <div className="bg-gray-800 text-white absolute z-10 max-w-full md:max-w-3xl p-10 rounded-md">
      <h1 className="text-4xl font-bold">Add User</h1>

      <form className="grid my-3">
        <label htmlFor="first-name">First</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          className="my-1 rounded-md p-2 blocks"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-name">Last</label>
        <input
          type="text"
          id="last-name"
          className="my-1 rounded-md p-2"
          name="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="my-1 rounded-md p-2"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-white font-semibold text-gray-800 rounded-md my-4 py-2"
          onClick={addUser}
        >
          Add
        </button>
      </form>
    </div>
  ) : (
    ""
  );
}

export default AddUser;
