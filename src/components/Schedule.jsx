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
          src="https://i.gyazo.com/4f69f683dd533d598e07c44a20b629f8.png"
        ></img>
      </div>{" "}
      <div className={schedulePos}>
        <img
          className={scheduleStyle}
          alt="Schedule"
          src="https://i.gyazo.com/7c5f99bf734c1d0b3c559c6916c3fdc4.png"
        ></img>
      </div>
    </div>
  );
}
export default Schedule;
