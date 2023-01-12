//-------------------------------------------------------------------------------------------------
// IMPORTS

import Adi_Profile from "../images/icons/Adi_Profile.jpg";
import github_logo from "../images/icons/github_logo.png";
import linkledln_logo from "../images/icons/linkledln_logo.png";
import resume_logo from "../images/icons/resume_logo.png";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
let icons_hover_style =
  "border-1 border-white divide-x-reverse  m-auto h-7 w-7 mx-2 hover:scale-125";
let adi_profile_img_style =
  "  m-auto rounded-lg h-50% w-20% border-double border-4 border-black ";
let icons_format = "flex flex-row items-center m-auto my-2 ";
let text_style =
  "font-mono border-1 border-white divide-x-reverse text-black text-center text-2xl  font-bold italic drop-shadow-lg shadow-black flex-center ";
// Position background to the left
let background = "bg-white ";
//-------------------------------------------------------------------------------------------------

function Profile() {
  return (
    <div className={background}>
      <p className={text_style}> Adi Bhan</p>
      <div className="flex flex-col">
        <img className={adi_profile_img_style} src={Adi_Profile}></img>
        <div className={icons_format}>
          <img
            className={icons_hover_style}
            src={github_logo}
            onClick={() =>
              (window.location.href = "https://github.com/AdiBhan")
            }
          ></img>
          <a href="imaages/Adi_Resume.pdf" download>
            <img className={icons_hover_style} src={resume_logo}></img>
          </a>
          <img
            className={icons_hover_style}
            src={linkledln_logo}
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/adibhan/")
            }
          ></img>
        </div>{" "}
      </div>
    </div>
  );
}
export default Profile;
