import React from "react";
import "../../../styles/skills.css";
import Skills from "./Skills";
export default function SkillsHolder() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
    "black",
  ];
  return (
    <div className="scale-95">
      {" "}
      <p className="label_style"> Software Languages:</p>
      <div className="skills_horz_container">
        <Skills color={colors[0]} name="Java" />
        <Skills color={colors[7]} name="Python" />
        <Skills color={colors[2]} name="ReactJS" />
      </div>{" "}
      <p className="label_style"> Services:</p>
      <div className="skills_horz_container">
        <Skills color={colors[4]} name="Render" />
        <Skills color={colors[1]} name="Firebase" />
      </div>
      <p className="label_style"> Other Tools:</p>
      <div className="skills_horz_container">
        <Skills color={colors[-2]} name="Git" />
        <Skills color={colors[6]} name="Docker" />
        <Skills color={colors[5]} name="MySQL" />
      </div>
    </div>
  );
}
