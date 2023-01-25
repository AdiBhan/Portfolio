//-------------------------------------------------------------------------------------------------
// IMPORTS
import React from "react";
import "semantic-ui-css/semantic.min.css";
import Typewriter from "typewriter-effect";
import Profile from "../Profile/Profile";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND

const inner_background =
  "p-3 m-4  rounded-lg px-6 py-8 ring-2 ring--black border-2 border-black ring-inset italic  drop-shadow rounded-xl bg-white font-mono";
const hover_hightlight_color =
  "text-black border-2 border-blue-700 hover:scale-105  badge rounded-pill text-bg-info m-1 border-3 rounded-lg  ring-1 ring-shadow-xl/5";
const headings_style =
  "border-4 border-black badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-1xl border-2 rounded-lg px-6 py-8 ring-1 ring-shadow-xl/5";
const text_style = "text-black hover:text-blue-700";
const header_spacing = "basis-1/4";
const flexbox_style = "flex  flex-nowrap m-3";
//-------------------------------------------------------------------------------------------------

function Journey(props) {
  return (
    <>
      <div id="Journey">
        <div className={props.background}>
          <p className={inner_background}>
            <br></br>
            <br></br>
            <br></br>
            <Typewriter
              className="indent-8"
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Hi there! Welcome to my website. I am a sophomore at Boston University, majoring in Computer Science. Currently, I am actively pursuing an 2023 Summer Software Development Internship. As a problem solver I love to tackle any challenge which comes my way. My expertise is in Java and Python, and am currently teaching myself ReactJS, along with my coursework. I like to showcase my abilities on projects at local hackathons. Check out my journey, projects, and feel free to contact me below!"
                  )

                  .start();
              }}
            />
            <div class={props.divider}></div>
            <br></br>
            <br></br>

            <div class={flexbox_style}>
              <div class={header_spacing}>
                <p className={headings_style}>
                  ☀️ Summer 2022 | Relevant Coursework
                </p>
                <br></br>
                <br></br>
                <li className={hover_hightlight_color}>
                  <a
                    className={text_style}
                    href="https://www.cs.bu.edu/courses/cs111/"
                  >
                    CS111: Introduction to Computer Science I 💾
                  </a>
                </li>
              </div>
              <div class={header_spacing}>
                <p className={headings_style}>
                  🍂 Fall 2022 | Relevant Coursework
                </p>
                <br></br>
                <br></br>
                <li className={hover_hightlight_color}>
                  <a
                    className={text_style}
                    href="https://www.cs.bu.edu/courses/cs112/"
                  >
                    CS112: Introduction to Computer Science II 💾
                  </a>
                </li>

                <br></br>

                <li className={hover_hightlight_color}>
                  {" "}
                  <a
                    className={text_style}
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
                <p className={headings_style}>
                  🍃 Spring 2023 | Relevant Coursework
                </p>
                <br></br>
                <br></br>

                <li className={hover_hightlight_color}>
                  <a
                    className={text_style}
                    href="https://www.bu.edu/academics/cas/courses/cas-cs-132/"
                  >
                    CS132: Geometric Algorithms 💾
                  </a>
                </li>
                <br></br>
                <li className={hover_hightlight_color}>
                  <a
                    className={text_style}
                    href="https://www.howchenn.com/teaching/fall2022"
                  >
                    CS 200: Applied Problem Solving 💾
                  </a>
                </li>
                <br></br>

                <li className={hover_hightlight_color}>
                  <a
                    className={text_style}
                    href="https://www.bu.edu/academics/cas/courses/cas-cs-210/"
                  >
                    CS210: Computer Systems 💾
                  </a>
                </li>
                <br></br>
                <li className={hover_hightlight_color}>
                  <a
                    className={text_style}
                    href="https://www.bu.edu/academics/cas/courses/cas-cs-131/"
                  >
                    DS280: Spark! UX/UI Design 📱
                  </a>
                  <br></br>
                </li>
              </div>{" "}
              <Profile />
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
export default Journey;
