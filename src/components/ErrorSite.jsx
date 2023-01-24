import React from "react";
function Buffer(props) {
  const background =
    "bg-zinc-900 h-full w-full flex items-center justify-center";
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
      <br></br>
      <br></br>
      <h1 className="justify-center m-3 text-6xl text-white">
        {" "}
        {props.heading}
        <p>{props.subtext}</p>
      </h1>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
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
