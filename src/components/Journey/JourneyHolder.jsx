//-------------------------------------------------------------------------------------------------
// IMPORTS

import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Typewriter from "typewriter-effect";
import "../../styles/index.css";
import "../../styles/skills.css";
import Profile from "./Profile";
import SkillsHolder from "./Skills/SkillsHolder";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND

const inner_background =
  "p-3 m-4  rounded-lg px-6 py-8 ring-2 ring--black border-2  rounded-b-lg border-black ring-inset italic  drop-shadow rounded-xl bg-white font-mono";

//-------------------------------------------------------------------------------------------------

function Journey(props) {
  return (
    <>
      <div id="Journey">
        <div className="page_styling">
          {" "}
          <div class={props.divider}></div>{" "}
          <p className={`${inner_background} `}>
            <div class="ui segment">
              {" "}
              <div class="intro_horz_container ">
                <div className="profile_pos">
                  <Profile />
                </div>
                <div className="pos_links">
                  <Link to="/Project/">
                    <a className="intro_style">View my Projects</a>
                  </Link>
                  <Link to="/Skills/">
                    <a href="/" className="intro_style">
                      View my Skills
                    </a>
                  </Link>
                  <Link to="/Contact/">
                    <a className="intro_style">Send a Message</a>{" "}
                  </Link>
                </div>{" "}
              </div>
              <div class="ui segment">
                <Typewriter
                  className="indent-8 typewriter_size "
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Adi : Hi there! Welcome to my website. I am a sophomore at Boston University, majoring in Computer Science. Currently, I am actively pursuing an 2023 Summer Software Development Internship. As a problem solver I love to tackle any challenge which comes my way. My expertise is in Java,Python,ReactJS/NextJS and am, along with my coursework. I like to showcase my abilities on projects at local hackathons. Check out my journey, projects, and feel free to contact me below!"
                      )

                      .start();
                  }}
                />{" "}
              </div>
            </div>{" "}
            {/* <div class={props.divider}></div>
            <Timeline />
            <div class={props.divider}></div> */}
            <SkillsHolder />
            <div class={props.divider}></div>
          </p>
        </div>
      </div>
    </>
  );
}
export default Journey;
