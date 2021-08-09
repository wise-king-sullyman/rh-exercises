import React from "react";

import "./Detail.css";

function Detail({ first_name, last_name, email, imageLink }) {
  return (
    <section className="detail">
      <h2 className="detail__title">Details for {first_name}</h2>
      <article className="detail-card">
        <div className="detail-card__image-container">
          <img
            src={imageLink}
            alt="user closeup"
            className="detail-card__image"
          />
        </div>
        <div className="detail-card__info">
          <p className="detail-card__name">{`${first_name} ${last_name}`}</p>
          <address className="detail-card__email">{email}</address>
        </div>
      </article>
    </section>
  );
}

export default Detail;
