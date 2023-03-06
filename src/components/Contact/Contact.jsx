import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../../styles/contact.css";
import "../../styles/skills.css";
import Section from "./Section";
function Contact(props) {
  //-------------------------------------------------------------------------------------------------
  // CSS INLINE STYLING USING TAILWIND
  const background_body = "p-2  rounded-lg";
  const form_position =
    "flex flex-col content-start m-3 font-mono text-left text-white justify-content align-items-center";

  const submit_button_style = "m-3 text-white scale-90 btn  ui primary button";
  const section_style = "m-3 border border-white btn btn-dark";
  const form_type = "content-start";
  //-------------------------------------------------------------------------------------------------

  const form = useRef();
  const history = useHistory();
  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        "service_h2elgro",
        "template_p7z54rc",
        e.target,
        "shs8FBJt1uAdjvkXS"
      );
      history.push("/success/");
      alert("Success! Your message has been sent!");
    } catch (error) {
      alert("Message failed to send.");
    }
    e.target.reset();
  };

  return (
    <div className={props.background} id="#Contact">
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {" "}
        <br></br> <br></br>
        <form ref={form} className={form_type} onSubmit={sendEmail}>
          <div className={background_body}>
            {" "}
            <br></br> <br></br>
            <div className={props.divider}></div> <br></br> <br></br>
            <h1 className="form_header">Contact Me</h1>
            <div className={form_position}>
              <Section name="Name" />
              <Section name="Email" />
              <Section name="Subject" />
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div>
                  {" "}
                  <label className={section_style}>
                    Message:
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="7"
                      cols="90"
                      name="message"
                      placeholder="Type your message here"
                    ></textarea>
                  </label>
                </div>
              </motion.div>
              <div>
                {" "}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button type="submit" className={submit_button_style}>
                    SUBMIT
                  </button>{" "}
                  <br></br> <br></br>
                </motion.div>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
export default Contact;
