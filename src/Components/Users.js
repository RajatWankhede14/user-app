import axios from "axios";
import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import UsersTable from "./UsersTable";
// import UserCard from "./UserCard";

function Users() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("https://reqres.in/api/users");
      setPeople(res.data.data);
    }
    fetchData();
  }, []);

  const [popup, setPopUp] = useState(false);

  const showPopUp = () => {
    if (popup === false) {
      setPopUp(true);
    } else {
      setPopUp(false);
    }
  };
  return (
    <div className="max-w-5xl mx-auto my-6 px-10">
      <h1 className="text-center text-4xl font-bold py-3">Users App</h1>
      <div>
        <button
          className="text-center text-white bg-gray-800 px-4 py-2 rounded-md font-semibold"
          onClick={showPopUp}
        >
          Add User
        </button>
        <AddUser
          popup={popup}
          setPopUp={setPopUp}
          setPeople={setPeople}
          people={people}
        />
      </div>
      <UsersTable people={people} setPeople={setPeople} />
    </div>
  );
}

export default Users;
