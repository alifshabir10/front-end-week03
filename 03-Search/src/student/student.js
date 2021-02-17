import React from "react";

import { Icon } from "react-icons-kit";
import { star, play, alignCenter } from "react-icons-kit/fa/";
import { Link } from "react-router-dom";
// import "./student.css";

const student = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(students/${props.picture})` }}
    >
      <Link to="/student">
        <div className="title">
          <span style={{ color: "#fff", opacity: 1 }}>NIM = {props.nim}</span>
          <br></br>
          <span>NAMA = {props.nama}</span>
          <span>IPK = {props.ipk}</span>
          <span>KOTA = {props.kota}</span>
          VOTE = {props.vote}
        </div>
      </Link>
      <alignCenter>
        <button>Vote</button>
      </alignCenter>
      <br></br>
    </div>
  );
};

export default student;
