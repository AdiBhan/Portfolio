function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function Contact() {
  const background_body = "p-2 bg-zinc-800 rounded-lg";
  const contact_heading_style =
    " display-2 m-3 border-3 border-black text-black  badge bg-white font-bold p-3  font-bold drop-shadow-lg shadow-black flex-center font-mono text-2xl  hover:overline ";
  return (
    <div className="bg-zinc-900" id="#Contact">
      {" "}
      <div className={background_body}>
        {" "}
        <p onClick={topFunction} className={contact_heading_style}>
          [Contact]
        </p>
        <br></br>
        <div className="flex flex-col justify-content align-items-center text-white m-3 font-mono">
          <div>
            <label className="m-3">Email:</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            ></input>
          </div>
          <div>
            <label className="m-3">Subject:</label>
            <input
              type="email"
              class="form-control"
              id="inputSubject14"
              placeholder="Subject"
            ></input>
          </div>

          <div>
            {" "}
            <label className="m-3">Message:</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              cols="90"
            ></textarea>
          </div>
          <div>
            {" "}
            <button
              type="submit"
              className="btn btn-outline-primary hover:bg-inherit hover:text-blue-600 m-3"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
