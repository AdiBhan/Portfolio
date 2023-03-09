import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Alerts from "./Alerts";

import "../../../styles/skills.css";
function Skills(props) {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = useState(0);
  console.log(props.skill_level);
  const icons = [
    "python icon",
    "react icon",
    "git square icon",
    "docker icon",
    "node js icon",
    "sass icon",
    "file code icon",
    "google icon",
  ];

  return (
    <div className="m-3">
      <Alerts setOpen={setOpen} open={open} />
      <div className="m-4 label label_style">
        {props.name} <i class={`${icons[props.icons_idx]}`}></i>
      </div>{" "}
      <div
        className={`ui ${props.color} active progress progressbar_style m-4`}
        total={100}
        style={{ width: `100%` }}
        value={progress}
      >
        <div style={{ width: props.skill_level }} className="bar"></div>{" "}
      </div>
      <p onClick={() => setOpen(true)} className="more">
        Learn More
      </p>
    </div>
  );
}

export default Skills;
