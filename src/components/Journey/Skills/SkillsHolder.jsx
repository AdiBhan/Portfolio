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
        <Skills color={colors[0]} name="Java " icons_idx={6} />
        <Skills color={colors[7]} name="Python" icons_idx={0} />
        <Skills color={colors[2]} name="ReactJS" icons_idx={1} />
      </div>{" "}
      <p className="label_style"> Services:</p>
      <div className="skills_horz_container">
        <Skills color={colors[4]} name="Render" icons_idx={6} />
        <Skills color={colors[1]} name="Firebase" icons_idx={7} />
      </div>
      <p className="label_style"> Other Tools:</p>
      <div className="skills_horz_container">
        <Skills color={colors[-2]} name="Git" icons_idx={2} />
        <Skills color={colors[6]} name="Docker" icons_idx={3} />
        <Skills color={colors[5]} name="MySQL" icons_idx={6} />
        <Skills color={colors[4]} name="Node JS" icons_idx={4} />
        <Skills color={colors[9]} name="Sass" icons_idx={5} />
      </div>
    </div>
  );
}
