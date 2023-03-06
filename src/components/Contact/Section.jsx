import "../../styles/contact.css";
//-------------------------------------------------------------------------------------------------
// TAILWIND CSS Styling
import { motion } from "framer-motion";
import React from "react";
import "semantic-ui-css/semantic.min.css";

const section_style = "m-3 border border-white btn btn-dark shadow-xl";

//-------------------------------------------------------------------------------------------------
const Section = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="contact_section_sty">
        <label className={section_style}>
          {props.name}
          <input
            type={props.name}
            name={props.name}
            class="form-control"
            id="inputName14"
            placeholder={props.name}
          ></input>
        </label>
      </div>
    </motion.div>
  );
};

export default Section;
