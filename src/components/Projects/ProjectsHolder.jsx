//-------------------------------------------------------------------------------------------------

import { motion } from "framer-motion";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "semantic-ui-css/semantic.min.css";
import "../../styles/index.css";
import "./Projects.css";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const img_size = "h-50 w-50";
const body_text_style =
  "   alert alert-danger text-black italic font-mono text-base scale-90  border-4 border-red-500 ";
const body_text_style_2 =
  " alert alert-primary text-black italic font-mono text-base scale-90  border-4 border-sky-500";
const body_text_style_3 =
  " alert alert-success text-black italic font-mono text-base scale-90 border-4 border-green-500 ";
const body_text_style_4 =
  " alert alert-warning text-black italic font-mono text-base scale-90 border-4 border-yellow-500 ";
const project_header_style =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-2xl font-mono scale-75 border-4 border-sky-500";
const project_header_style_1 =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-2xl font-mono scale-75 border-4 border-red-500";
const project_header_style_2 =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-2xl font-mono scale-75 border-4 border-green-500";

const project_header_style_3 =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-2xl font-mono scale-75 border-4 border-yellow-500";

const project_header_style_5 =
  "badge rounded-pill text-bg-dark font-bold p-3 badge text-bg-dark text-2xl font-mono scale-75 border-4 border-purple-500";
const body_text_style_5 =
  " alert  alert-dark text-black italic font-mono text-base scale-90 border-4 border-purple-500 ";
const img_pos = `mx-auto object-cover ${img_size}`;

const textStyle = "text-blue-600 m-2";
const carouselPos = "relative bottom-0 left-0 text-center";
const carouselResize = "scale-95";
//-------------------------------------------------------------------------------------------------

function Projects(props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileClick={{ scale: 0.9 }}
      >
        <div id="Projects ">
          {" "}
          <br></br> <br></br>
          <div className={props.background}>
            <div className={props.divider}></div>
            <Carousel
              showControls={true}
              showIndicators={true}
              variant="dark"
              fade
              className={carouselResize}
            >
              {/* Project 1 */}
              <Carousel.Item className>
                <img
                  className={` project_styling ${img_pos}`}
                  src="https://i.imgur.com/qa5Xg9H.png"
                  alt="First slide"
                />
                <Carousel.Caption className={`${carouselPos} `}>
                  <h3 className={`${project_header_style_1} header_style`}>
                    Adi 🤖 | AI Ad Generator App
                  </h3>
                  <p className={`body_sty ${body_text_style}`}>
                    <b>Introduction:</b>
                    <br></br> Have you ever run ads before? Probably not. It
                    costs $200 on average to create a professional marketing
                    poster. That's where Adi comes in. With just 20 cents a
                    piece, we instantly generate a poster for you. So anyone can
                    promote their own ventures! <br></br>
                    <br></br>
                    <div className="mb-3">
                      <b>Winner: </b>BostonHacks 2022 Hackathon, Boston MA
                    </div>
                    <div className="mb-3">
                      <b>Software Used:</b> React Native, Python, Frameworks:
                      Django, AI: Dalle-2, GPT-3
                    </div>
                    <div className="mb-3">
                      <b>My Role:</b> FullStack Developer
                    </div>
                    <a
                      className={`${textStyle} sourcecodebutton`}
                      href="https://github.com/AdiBhan/bostonhacks-2022"
                    >
                      [Source Code]
                    </a>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Project 2 */}
              <Carousel.Item>
                <img
                  className={` project_styling ${img_pos}`}
                  src="https://i.imgur.com/1F3QuXd.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption
                  className={` ${carouselPos} carousel_center_mobile`}
                >
                  <h3 className={`${project_header_style} header_style`}>
                    Greengle 🛒 | Digital CO₂ Tracker{" "}
                  </h3>
                  <p className={`body_sty ${body_text_style_2}`}>
                    <b>Introduction:</b>
                    <br></br> Greengle is a companion site for Amazon.com, that
                    helps consumers estimate the carbon footprint of their
                    Amazon purchase.. This project was initially created during
                    an eight-hour "BU Spark!" sustainability mini-hackathon and
                    won the "Best Code" prize. It functions by determining the
                    distance between the buyer's address and the nearest Amazon
                    fullfilment center. <br></br>
                    <br></br>
                    <div className="mb-3">
                      <b> Winner: </b> BU Spark Hackathon 2022, Boston MA
                    </div>{" "}
                    <div className="mb-3">
                      <b>Software Used:</b> React, NextJS, Flask, Python
                    </div>
                    <div className="mb-3">
                      <b>My Role:</b> FullStack Developer
                    </div>
                    <a
                      className={`${textStyle} sourcecodebutton`}
                      href="https://github.com/AdiBhan/Greengle"
                    >
                      [Source Code]
                    </a>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Project 3 */}
              <Carousel.Item>
                <img
                  className={` project_styling ${img_pos}`}
                  src="https://i.gyazo.com/0119564a4dbd3c5af08d2ebe65aaf5d7.png"
                  alt="Third slide"
                />

                <Carousel.Caption className={carouselPos}>
                  <div className="pb-4">
                    <h3 className={`${project_header_style_2} header_style`}>
                      Portfolio Website
                    </h3>
                    <p className={`body_sty ${body_text_style_3}`}>
                      <b>Introduction:</b>
                      <br></br>This is my personal portfolio website.
                      <br></br>
                      <br></br>
                      <div className="mb-3">
                        <b>Software Used: </b> React, Typescript, TailwindCSS,
                        Bootstrap
                      </div>
                      <div className="horz_container">
                        <a
                          className={`${textStyle} sourcecodebutton`}
                          href="https://adibhan.github.io/Portfolio/"
                        >
                          [Demo]
                        </a>{" "}
                        <a
                          className={`${textStyle} sourcecodebutton`}
                          href="https://github.com/AdiBhan/Portfolio"
                        >
                          [Source Code]
                        </a>
                      </div>
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Project 4 */}
              <Carousel.Item>
                <img
                  className={` project_styling ${img_pos}`}
                  src="https://i.gyazo.com/50f4ca9ffb3c1451f2b11b075d9e0444.png"
                  alt="Third slide"
                />

                <Carousel.Caption className={carouselPos}>
                  <div className="pb-4">
                    <h3 className={`${project_header_style_3} header_style`}>
                      USColleges
                    </h3>
                    <p className={`body_sty ${body_text_style_4}`}>
                      <b>Introduction:</b>
                      <br></br>Introducing "USColleges" a one-stop website for
                      all your college ranking needs! This website brings
                      together data from multiple college ranking websites and
                      presents it in an easy-to-compare format. With a sleek and
                      modern user interface built with ReactJS, Tailwind CSS,
                      and Semantic UI, you'll have a seamless browsing
                      experience as you compare colleges and find the perfect
                      fit for you.
                      <br></br>
                      <br></br>
                      <div className="mb-3">
                        <b>Software Used: </b> React, TailwindCSS,Semantic UI,
                        Firebase, Render, Flask
                      </div>
                      <div className="horz_container">
                        <a
                          className={`${textStyle} sourcecodebutton`}
                          href="http://uscolleges.live/"
                        >
                          [Demo]
                        </a>{" "}
                        <a
                          className={`${textStyle} sourcecodebutton`}
                          href="https://github.com/AdiBhan/USColleges"
                        >
                          [Source Code]
                        </a>
                      </div>
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Project 5 */}
              <Carousel.Item>
                <img
                  className={` project_styling ${img_pos}`}
                  src="https://user-images.githubusercontent.com/55467050/221664692-cf9fbbd3-3bfb-421c-9535-94b541e23a72.png"
                  alt="Third slide"
                />

                <Carousel.Caption className={carouselPos}>
                  <div className="pb-4">
                    <h3 className={`${project_header_style_5} header_style`}>
                      ParentAlly **NEW**
                    </h3>
                    <p className={`body_sty ${body_text_style_5}`}>
                      <b>Introduction:</b>
                      <br></br>Created for the 2023 Civic Tech Hackathon. Our
                      website connects single parents by geographic area. It has
                      many different places of interaction. For example,
                      Sharespace offers a place for individuals to exchange
                      goods that are no longer needed, and our Programs catalog
                      highlights government and nonprofit financial
                      opportunities.
                      <br></br>
                      <br></br>
                      <div className="mb-3">
                        <b>Software Used: </b> HTML, CSS, JavaScript, Bootstrap,
                        Django, GPT-3, Express
                      </div>{" "}
                      <div className="mb-3">
                        <b>My Role:</b> FullStack Developer
                      </div>
                      <div className="horz_container">
                        <a
                          className={`${textStyle} sourcecodebutton`}
                          href="https://parentally.social/"
                        >
                          [Demo]
                        </a>{" "}
                        <a
                          className={`${textStyle} sourcecodebutton`}
                          href="https://devpost.com/software/parentally-empowering-single-parents?ref_content=my-projects-tab&ref_feature=my_projects"
                        >
                          [Source Code]
                        </a>
                      </div>
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default Projects;
