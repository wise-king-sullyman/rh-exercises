import React, { useState, useEffect } from "react";

import UserListLayout from "../UserListLayout/UserListLayout";

async function fetchUsers() {
  try {
    const users = await fetch("https://reqres.in/api/users").then((res) =>
      res.json()
    );
    return users;
  } catch (error) {
    console.error(error);
  }
}

function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(async () => {
    const users = await fetchUsers()
    setUserData(users.data)
  }, []);

  return (
    <UserListLayout
      users={userData}
    />
  );
}

export default UserList;
