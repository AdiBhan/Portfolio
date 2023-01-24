import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../index.css";
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const icons_hover_style =
  " divide-x-reverse  m-auto h-7 w-7 mx-2 hover:scale-125  rounded-lg";
const adi_profile_img_style =
  "  m-auto rounded-lg h-60 w-60 border-double border-4 border-black hover:scale-105";
const icons_format = "flex flex-row items-center m-auto my-2 ";
const text_style =
  "ui large header drop-shadow-2xl font-mono border-1 border-white divide-x-reverse text-black text-center text-2xl  font-bold italic  shadow-black flex-center ";
//-------------------------------------------------------------------------------------------------

function Profile(props) {
  return (
    <div className={props.background}>
      <div className="swing">
        <p className={text_style}> Adi Bhan</p>
        <p>
          "Dedicated computer science student with a passion for programming and
          a deep understanding of algorithms and data structures"
        </p>
        <div className="flex flex-col ">
          <img
            className={adi_profile_img_style}
            src="https://media.licdn.com/dms/image/D4E03AQHWdA1NqnJyag/profile-displayphoto-shrink_800_800/0/1674081456159?e=1679529600&v=beta&t=OXLnXV7AgEJPN7mIi5WdblMk7oH2qADQLEHzhjrD9SM"
          ></img>
          <div className={icons_format}>
            <img
              className={icons_hover_style}
              src="https://i.gyazo.com/af447c1be3861967e1fa83aee638025f.png"
              onClick={() =>
                (window.location.href = "https://github.com/AdiBhan")
              }
            ></img>
            <a href="imaages/Adi_Resume.pdf" download>
              <img
                className={icons_hover_style}
                src="https://i.gyazo.com/c53e50a013cc42d7f4e3e8700c6de841.png"
              ></img>
            </a>
            <img
              className={icons_hover_style}
              src="https://i.gyazo.com/e9e64b92efc75bbb7546d8f82cf16c32.png"
              onClick={() =>
                (window.location.href = "https://www.linkedin.com/in/adibhan/")
              }
            ></img>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default Profile;
