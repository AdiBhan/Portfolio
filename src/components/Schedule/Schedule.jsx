import React from "react";
function Schedule(props) {
  const schedulePos = "schedule flex justify-center";
  const scheduleStyle = "border-black rounded-lg m-3  border-2 ";
  return (
    <div className={props.background}>
      <div className={schedulePos}>
        <img
          className={scheduleStyle}
          alt="Schedule"
          src="https://i.gyazo.com/c6570107a46e1385ac2842b4d6ddc9d7.png"
        ></img>
      </div>{" "}
      <div className={schedulePos}>
        <img
          className={scheduleStyle}
          alt="Schedule"
          src="https://i.gyazo.com/d97478d21f531d6e4205da6be24354ba.png"
        ></img>
      </div>
    </div>
  );
}
export default Schedule;
