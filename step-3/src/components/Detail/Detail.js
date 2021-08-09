import React from "react";

function Detail({ first_name, last_name, email, imageLink }) {
  return (
    <section>
      <h2>Details for {first_name}</h2>
      <div>
        <img src={imageLink} alt="user closeup" />
        <div>
          <p>{`${first_name} ${last_name}`}</p>
          <address>{email}</address>
        </div>
      </div>
    </section>
  );
}

export default Detail;
