import { motion } from "framer-motion";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../../../styles/profile.css";
import Icons from "./Icon";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const adi_profile_img_style =
  "  m-auto rounded-lg h-60 w-60 border-double border-4 border-black ";
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
        <div className="mt-5 swing fly-in-right rotation">
          <div className="rotation">
            <p className={`${text_style} shadow_text`}> Adi Bhan</p>

            <div className={`${icons_pos} mobile_ver`}>
              <img
                alt="Adi Bhan "
                className={`${adi_profile_img_style} image_style`}
                src="https://media.licdn.com/dms/image/D4E03AQHWdA1NqnJyag/profile-displayphoto-shrink_800_800/0/1674081456159?e=1679529600&v=beta&t=OXLnXV7AgEJPN7mIi5WdblMk7oH2qADQLEHzhjrD9SM"
              ></img>{" "}
              <Icons />
            </div>
          </div>{" "}
        </div>
      </div>
    </motion.div>
  );
}
export default Profile;
