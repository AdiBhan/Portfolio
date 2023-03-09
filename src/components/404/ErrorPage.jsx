import React from "react";
import "../../styles/404.css";

function Buffer(props) {
  return (
    <div className={props.background}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="ErrorStyle ">
        {" "}
        {props.heading} <br></br>
        {props.subtext}
      </h1>{" "}
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Buffer;
