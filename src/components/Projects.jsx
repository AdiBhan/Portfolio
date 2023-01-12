//-------------------------------------------------------------------------------------------------
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import adi_ai_project from "../images/projects_photos/adi-ai_project.png";
import greengle_project from "../images/projects_photos/greengle_project.png";
import portfolio_project from "../images/projects_photos/portfolio_project.png";

//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
let background = "bg-zinc-900 p-2 ";
let img_size = "h-50 w-50";
let body_text_style =
  "alert alert-danger text-black italic font-mono text-base scale-75  border-4 border-red-500 ";
let body_text_style_2 =
  "alert alert-primary text-black italic font-mono text-base scale-75  border-4 border-sky-500";
let body_text_style_3 =
  "alert alert-success text-black italic font-mono text-base scale-75 border-4 border-green-500 ";
let project_header_style =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-2xl font-mono scale-75 border-4 border-sky-500";
let project_header_style_1 =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-2xl font-mono scale-75 border-4 border-red-500";
let project_header_style_2 =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-2xl font-mono scale-75 border-4 border-green-500";
let projects_heading_style =
  " border-3 border-black text-black rounded- badge bg-white font-bold p-3  font-bold drop-shadow-lg shadow-black flex-center font-mono text-2xl  hover:overline ";
//-------------------------------------------------------------------------------------------------

function Projects() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <div id="Projects">
        <div className={background}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className={projects_heading_style} onClick={topFunction}>
            {" "}
            [Projects]{" "}
          </p>
          <br></br>
          <br></br>

          <Carousel fade>
            <Carousel.Item>
              <img
                className={`mx-auto object-cover position: relative ${img_size}`}
                src={adi_ai_project}
                alt="First slide"
              />
              <Carousel.Caption className="relative text-center absolute bottom-0 left-0  ">
                <h3 className={project_header_style_1}>
                  Adi 🤖 | AI Ad Generator App
                </h3>
                <p className={body_text_style}>
                  <b>Introduction:</b>
                  <br></br> Have you ever run ads before? Probably not. It costs
                  $200 on average to create a professional marketing poster.
                  That's where Adi comes in. With just 20 cents a piece, we
                  instantly generate a poster for you. So anyone can promote
                  their own ventures! <br></br>
                  <br></br>
                  <b>Winner: </b>BostonHacks 2022 Hackathon, Boston MA
                  <br></br>
                  <b>Software Used:</b> React Native, Python, Frameworks:
                  Django, AI: Dalle-2, GPT-3
                  <br></br>
                  <b>My Role:</b> Frontend Developer, Backend Developer, AI
                  <br></br>
                  <a
                    className="text-blue-600"
                    href="https://github.com/AdiBhan/bostonhacks-2022"
                  >
                    [Source Code]
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`mx-auto object-cover ${img_size}`}
                src={greengle_project}
                alt="Second slide"
              />

              <Carousel.Caption className=" relative text-center absolute bottom-0 left-0">
                <h3 className={project_header_style}>
                  Greengle 🛒 | Digital Carbon Footprint Tracker{" "}
                </h3>
                <p className={body_text_style_2}>
                  <b>Introduction:</b>
                  <br></br> Greengle is a companion site for Amazon.com, that
                  helps consumers estimate the carbon footprint of their Amazon
                  purchase.. This project was initially created during an
                  eight-hour "BU Spark!" sustainability mini-hackathon and won
                  the "Best Code" prize. It functions by determining the
                  distance between the buyer's address and the nearest Amazon
                  fullfilment center. <br></br>
                  <br></br>
                  <b> Winner: </b> BU Spark Hackathon 2022, Boston MA
                  <br></br>
                  <b>Software Used:</b> React, NextJS, Flask, Python
                  <br></br>
                  <b>My Role:</b> Frontend Developer, Backend Developer, AI
                  <br></br>
                  <a
                    className="text-blue-600"
                    href="https://github.com/AdiBhan/Greengle"
                  >
                    [Source Code]
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`mx-auto object-cover ${img_size}`}
                src={portfolio_project}
                alt="Third slide"
              />

              <Carousel.Caption className="relative text-center absolute bottom-0 left-0 ">
                <div className="pb-4">
                  <h3 className={project_header_style_2}>Portfolio Website</h3>
                  <p className={body_text_style_3}>
                    <b>Introduction:</b>
                    <br></br>This is my personal portfolio website.
                    <br></br>
                    <br></br>
                    <b>Software Used: </b> React, Typescript, TailwindCSS,
                    Bootstrap
                    <br></br>
                    <a
                      className="text-blue-600"
                      href="https://github.com/AdiBhan/PersonalSite"
                    >
                      [Source Code]
                    </a>
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}
export default Projects;
