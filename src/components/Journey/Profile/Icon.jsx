import { motion } from "framer-motion";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../../../styles/profile.css";

function Icons() {
  const icons_format = "flex flex-row items-center m-auto my-2 ";
  return (
    <div className="icons_style">
      <div className={`${icons_format}`}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <i
            onClick={() => {
              window.open("https://www.linkedin.com/in/adibhan/");
            }}
            className="scale-150 github square icon logo_sty"
          ></i>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <a className="black" href="../../../images/Adi_VF.pdf" download>
            <i className="scale-150 folder icon logo_sty"></i>
          </a>
        </motion.div>
        <motion.div
          onClick={() => {
            window.open("https://github.com/AdiBhan");
          }}
          whileHover={{ scale: 1.1 }}
        >
          <i className="scale-150 linkedin icon logo_sty"></i>
        </motion.div>
      </div>
    </div>
  );
}

export default Icons;
