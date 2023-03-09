import React from "react";
import "../../styles/schedule.css";

function Schedule(props) {
  const schedulePos = "schedule flex justify-center items-center ";
  const scheduleStyle =
    "border-black rounded-lg mt-5 mb-4  border-2 z-40 scale-75";
  return (
    <>
      <div className={`${schedulePos} schedule-positioning-cal`}>
        <img
          className={scheduleStyle}
          alt="Schedule"
          src="https://i.gyazo.com/c6570107a46e1385ac2842b4d6ddc9d7.png"
        ></img>
      </div>{" "}
      <div className={`${schedulePos} schedule-positioning-details`}>
        <img
          className={scheduleStyle}
          alt="Schedule"
          src="https://i.gyazo.com/d97478d21f531d6e4205da6be24354ba.png"
        ></img>
      </div>
    </>
  );
}
export default Schedule;
