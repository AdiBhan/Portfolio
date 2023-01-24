import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

function Contact(props) {
  const background_body = "p-2  rounded-lg";

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
      <form ref={form} className="content-start" onSubmit={sendEmail}>
        {" "}
        <div className={background_body}>
          {" "}
          <br></br>
          <div class="ui divider"></div>
          <div className="flex flex-col content-start m-3 font-mono text-left text-white justify-content align-items-center">
            <div>
              <div></div>
              <label className="m-3 border border-white btn btn-dark">
                Name:
                <input
                  type="name"
                  name="name"
                  class="form-control"
                  id="inputName14"
                  placeholder="Name"
                ></input>
              </label>
            </div>

            <div>
              <label className="m-6 border border-white btn btn-dark">
                Email:
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  name="email"
                  placeholder="Email"
                ></input>
              </label>
            </div>
            <div>
              <label className="m-6 border border-white btn btn-dark">
                Subject:
                <input
                  type="text"
                  class="form-control"
                  id="inputSubject14"
                  name="subject"
                  placeholder="Subject"
                ></input>
              </label>
            </div>

            <div>
              {" "}
              <label className="m-6 border border-white btn btn-dark">
                Message:
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="7"
                  cols="90"
                  name="message"
                ></textarea>
              </label>
            </div>
            <div>
              {" "}
              <button
                type="submit"
                className="m-3 text-white btn hover:scale-110 btn-dark "
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Contact;
