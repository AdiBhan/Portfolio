import React from "react";
import "../../../styles/skills.css";

function Skills(props) {
  return (
    <div className="m-3">
      <div className="label label_style m-4">{props.name}</div>
      <div
        className={`ui ${props.color} active progress progressbar_style m-4`}
        value={35}
        total={100}
      >
        <div className="bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
