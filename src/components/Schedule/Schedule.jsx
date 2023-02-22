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
          src="https://i.gyazo.com/ff82849ef0a3af9273cae7022389caca.png"
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
