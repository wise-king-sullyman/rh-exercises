import React from "react";

import "./UserListLayout.css";
import Card from "../Card/Card";

function UserListLayout({ users }) {
  return (
    <main>
      <section className="user-layout">
        <h1 className="user-layout__heading">Users</h1>
        <div className="user-layout__card-container">
          {users.map(({ id, first_name, last_name, avatar }) => (
            <Card
              key={id}
              name={`${first_name} ${last_name}`}
              id={id}
              imageLink={avatar}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default UserListLayout;
