import React from "react";
import "./Card.css";

function Card({ name, id, imageLink }) {
  return (
    <article className="card">
      <div className="card__image-container">
        <img
          src={imageLink}
          alt="user photo"
          className="card__image"
        />
      </div>
      <div className="card__name-container">
        <h2 className="card__name">{name}</h2>
      </div>
      <div className="card__id-container">
        <span className="material-icons"> person </span>
        <p className="card__id">ID: {id}</p>
      </div>

      <div className="card__detail-container">
        <span
          className="material-icons-outlined"
          style={{ color: "#3371c8", fontSize: "24px" }}
        >
          info
        </span>
        <a href={`/users/${id}`} className="card__detail-link">
          See details
        </a>
      </div>
    </article>
  );
}

export default Card;
