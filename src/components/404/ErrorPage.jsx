import React from "react";

//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const text_style = "justify-center m-3 text-6xl text-white";
//-------------------------------------------------------------------------------------------------
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
      <br></br>
      <br></br>
      <h1 className={text_style}>
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
