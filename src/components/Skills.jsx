//------------------------------------------------------------------------------------------------------
import ProgressBar from "react-bootstrap/ProgressBar";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const java_skill = 60;
const python_skill = 90;
const reactjs_skill = 50;
const html_skill = 80;
const css_skill = 70;
const django_skill = 35;

let skill_style = "display-2 text-base text-white";
let background = "bg-zinc-900 p-2 ";
let div_class =
  "w-1/6 bg-gray-700 h-30 mx-2 my-2 px-2 border-y-2 border-white ";

let skills_heading_style =
  " display-2 m-3 border-3 border-black text-black rounded- badge bg-white font-bold p-3  font-bold drop-shadow-lg shadow-black flex-center font-mono text-2xl  hover:overline ";
//-------------------------------------------------------------------------------------------------
function Skills() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div id="Skills">
      <div className={background}>
        <p className={skills_heading_style} onClick={topFunction}>
          [Skills]
        </p>
        <div className="flex  justify-content align-items-center">
          <div className={div_class}>
            <p className={skill_style}>Java: {java_skill}%</p>

            <ProgressBar
              striped
              variant="success"
              animated
              now={java_skill}
              label={`${java_skill}%`}
            />
          </div>
          <div className={div_class}>
            <p className={skill_style}>Python: {python_skill}%</p>
            <ProgressBar
              striped
              variant="info"
              animated
              now={python_skill}
              label={`${python_skill}%`}
            />
          </div>
          <div className={div_class}>
            <p className={skill_style}>CSS: {css_skill}%</p>
            <ProgressBar
              striped
              variant="warning"
              animated
              now={css_skill}
              label={`${css_skill}%`}
            />
          </div>
          <div className={div_class}>
            <p className={skill_style}>ReactJS: {reactjs_skill}%</p>
            <ProgressBar
              striped
              variant="secondary"
              animated
              now={reactjs_skill}
              label={`${reactjs_skill}%`}
            />
          </div>{" "}
          <div className={div_class}>
            <p className={skill_style}>HTML: {html_skill}%</p>
            <ProgressBar animated now={html_skill} label={`${html_skill}%`} />
          </div>
          <div className={div_class}>
            <p className={skill_style}>Django: {django_skill}%</p>
            <ProgressBar
              striped
              variant="danger"
              animated
              now={django_skill}
              label={`${django_skill}%`}
            />
          </div>
        </div>{" "}
        <br></br>
      </div>
    </div>
  );
}

export default Skills;
