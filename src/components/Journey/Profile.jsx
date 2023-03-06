import { motion } from "framer-motion";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../../styles/profile.css";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const icons_hover_style =
  " divide-x-reverse  m-auto h-7 w-7 mx-2 hover:scale-125  rounded-lg mt-2";
const adi_profile_img_style =
  "  m-auto rounded-lg h-60 w-60 border-double border-4 border-black hover:scael";
const icons_format = "flex flex-row items-center m-auto my-2 ";
const icons_pos = "flex flex-col  ";
const text_style =
  "ui large header drop-shadow-2xl font-mono border-1 border-white divide-x-reverse text-black text-center text-2xl  font-bold italic  shadow-black flex-center capitalize  ";
//-------------------------------------------------------------------------------------------------

function Profile(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className={props.background}>
        <div className="swing mt-5 fly-in-right rotation">
          <div className="rotation">
            <p className={text_style}> Adi Bhan</p>

            <div className={icons_pos}>
              <img
                alt="Adi Bhan "
                className={`${adi_profile_img_style} image_style`}
                src="https://media.licdn.com/dms/image/D4E03AQHWdA1NqnJyag/profile-displayphoto-shrink_800_800/0/1674081456159?e=1679529600&v=beta&t=OXLnXV7AgEJPN7mIi5WdblMk7oH2qADQLEHzhjrD9SM"
              ></img>{" "}
              <div className={icons_format}>
                <img
                  alt="Github Icon"
                  className={icons_hover_style}
                  src="https://i.gyazo.com/af447c1be3861967e1fa83aee638025f.png"
                  onClick={() =>
                    (window.location.href = "https://github.com/AdiBhan")
                  }
                ></img>
                <a href="../../images/AdiBVF.pdf" download>
                  <img
                    alt="Resume Icon"
                    className={icons_hover_style}
                    src="https://i.gyazo.com/c53e50a013cc42d7f4e3e8700c6de841.png"
                  />
                </a>

                <img
                  alt="Linkledin Icon"
                  className={icons_hover_style}
                  src="https://i.gyazo.com/e9e64b92efc75bbb7546d8f82cf16c32.png"
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/in/adibhan/")
                  }
                ></img>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
      </div>
    </motion.div>
  );
}
export default Profile;
