//-------------------------------------------------------------------------------------------------
// TAILWIND CSS Styling
import { motion } from "framer-motion";
const section_style = "m-3 border border-white btn btn-dark shadow-xl";

//-------------------------------------------------------------------------------------------------
const Section = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
    </motion.div>
  );
};

export default Section;
