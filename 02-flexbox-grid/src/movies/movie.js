import React from "react";

import { Icon } from "react-icons-kit";
import { star, play } from "react-icons-kit/fa/";
import { Link } from "react-router-dom";
import "./movie.css";

const Movie = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(movie/${props.poster})` }}
    >
      <Link to="/movies">
        <div>
          <div>
            <span className="quality">
              {props.rating === 0
                ? "Trailer"
                : props.hd === false
                ? "CAM"
                : "HD"}
            </span>
          </div>
          <div className="rating-star">
            <span style={{ width: 18, height: 18, color: "#eccd40" }}>
              <Icon icon={star} />
            </span>
            <span className="rating">{props.rating}</span>
          </div>
        </div>
        <div className="title">
          <span style={{ color: "#fff68f", opacity: 0.5 }}>
            <Icon size={64} icon={play}></Icon>
          </span>
          {props.title} ({props.date.substr(0, 4)})
        </div>
      </Link>
    </div>
  );
};

export default Movie;