//-------------------------------------------------------------------------------------------------
// IMPORTS
import Typewriter from "typewriter-effect";
import Profile from "./Profile";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND

let background = "bg-zinc-900 p-2";
let inner_background =
  "p-3 m-4  italic border-black border-2 drop-shadow rounded-xl bg-white font-mono";
let hover_hightlight_color = "badge rounded-pill text-bg-info";
let headings_style =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-1xl";

//-------------------------------------------------------------------------------------------------

function Journey() {
  return (
    <>
      <div id="Journey">
        <div className={background}>
          <p className={inner_background}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Hi there! Welcome to my website. I am a sophomore at Boston University, majoring in Computer Science. Currently, I am actively pursuing an 2023 Summer Software Development Internship. As a problem solver I love to tackle any challenge which comes my way. My expertise is in Java and Python, and am currently teaching myself ReactJS, along with my coursework. I like to showcase my abilities on projects at local hackathons. Check out my journey, projects, and feel free to contact me below!"
                  )

                  .start();
              }}
            />

            <br></br>
            <br></br>

            <div class="flex  flex-nowrap">
              <div class="basis-1/5">
                <p className={headings_style}>
                  ☀️ Summer 2022 | Relevant Coursework
                </p>
                <br></br>
                <br></br>
                <li className={hover_hightlight_color}>
                  <a href="https://www.cs.bu.edu/courses/cs111/">
                    CS111: Introduction to Computer Science I 💾
                  </a>
                </li>
              </div>
              <div class="basis-1/4">
                <p className={headings_style}>
                  🍂 Fall 2022 | Relevant Coursework
                </p>
                <br></br>
                <br></br>
                <li className={hover_hightlight_color}>
                  <a href="https://www.cs.bu.edu/courses/cs112/">
                    CS112: Introduction to Computer Science II 💾
                  </a>
                </li>

                <br></br>

                <li className={hover_hightlight_color}>
                  {" "}
                  <a href="https://www.bu.edu/academics/cas/courses/cas-cs-131/">
                    {" "}
                    CS131: Combinatoric Stuctures 💾
                  </a>
                </li>

                <br></br>
                <br></br>
              </div>{" "}
              <div class="basis-1/4">
                <p className={headings_style}>
                  🍃 Spring 2023 | Relevant Coursework
                </p>
                <br></br>
                <br></br>

                <li className={hover_hightlight_color}>
                  <a href="https://www.bu.edu/academics/cas/courses/cas-cs-132/">
                    CS132: Geometric Algorithms 💾
                  </a>
                </li>
                <br></br>
                <li className={hover_hightlight_color}>
                  <a href="https://www.howchenn.com/teaching/fall2022">
                    CS 200: Applied Problem Solving 💾
                  </a>
                </li>
                <br></br>

                <li className={hover_hightlight_color}>
                  <a href="https://www.bu.edu/academics/cas/courses/cas-cs-210/">
                    CS210: Computer Systems 💾
                  </a>
                </li>
                <br></br>
                <li className={hover_hightlight_color}>
                  <a href="https://www.bu.edu/academics/cas/courses/cas-cs-131/">
                    DS280: Spark! UX/UI Design 📱
                  </a>
                  <br></br>
                </li>
              </div>{" "}
              <div class="basis-1/2">
                <Profile />
              </div>
            </div>
          </p>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}
export default Journey;
