import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../../styles/index.css";
import "../../styles/skills.css";

function Timeline() {
  const hover_hightlight_color =
    "text-black border-2 border-white hover:scale-105  badge rounded-pill  m-1 border-3 rounded-lg  ring-1 ring-shadow-x1/5  m-2";
  const headings_style =
    "border-4 border-black badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-1xl border-2 rounded-lg px-6 py-8 ring-1 ring-shadow-xl/5 scale-110";

  const header_spacing = "basis-1/4 mt-4 scale-110 m-5 ";

  return (
    <>
      <br></br>
      <p className="scale-110 label_style_specialized hover:scale-125 ">
        Coursework
      </p>
      <div
        className={`flexbox_style flexbox_style_mobile timeline_mobile_screens`}
      >
        <div class={header_spacing}>
          <p className={headings_style}>☀️ Summer 2022 | Relevant Coursework</p>
          <br></br>
          <br></br>
          <li className={hover_hightlight_color}>
            <a
              className="text_style"
              href="https://www.cs.bu.edu/courses/cs111/"
            >
              CS111: Introduction to Computer Science I 💾
            </a>
          </li>
        </div>
        <div class={header_spacing}>
          <p className={headings_style}>🍂 Fall 2022 | Relevant Coursework</p>
          <br></br>
          <br></br>
          <li className={hover_hightlight_color}>
            <a
              className="text_style"
              href="https://www.cs.bu.edu/courses/cs112/"
            >
              CS112: Introduction to Computer Science II 💾
            </a>
          </li>

          <br></br>

          <li className={hover_hightlight_color}>
            {" "}
            <a
              className="text_style"
              href="https://www.bu.edu/academics/cas/courses/cas-cs-131/"
            >
              {" "}
              CS131: Combinatoric Stuctures 💾
            </a>
          </li>

          <br></br>
          <br></br>
        </div>{" "}
        <div className={header_spacing}>
          <p className={headings_style}>🍃 Spring 2023 | Relevant Coursework</p>
          <br></br>
          <br></br>
          <li className={hover_hightlight_color}>
            <a
              className="text_style"
              href="https://www.bu.edu/academics/cas/courses/cas-cs-132/"
            >
              CS132: Geometric Algorithms 💾
            </a>
          </li>
          <br></br>
          <li className={hover_hightlight_color}>
            <a
              className="text_style"
              href="https://www.howchenn.com/teaching/fall2022"
            >
              CS 200: Applied Problem Solving 💾
            </a>
          </li>
          <br></br>
          <li className={hover_hightlight_color}>
            <a
              className="text_style"
              href="https://www.bu.edu/academics/cas/courses/cas-cs-210/"
            >
              CS210: Computer Systems 💾
            </a>
          </li>{" "}
          <br></br>
          <li className={hover_hightlight_color}>
            <a
              className="text_style"
              href="https://www.bu.edu/academics/cas/courses/cas-cs-131/"
            >
              DS280: Spark! UX/UI Design 📱
            </a>
            <br></br>
          </li>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Timeline;
