import { ProgressBar } from "react-bootstrap";
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const java_skill = 60;
const python_skill = 90;
const reactjs_skill = 50;
const html_skill = 80;
const css_skill = 70;
const django_skill = 35;

const skill_style = "display-2 text-base text-white mx-10 my-10";
const background = "bg-zinc-900 p-2 ";
const div_class =
  "w-1/6 bg-gray-700 h-30 mx-2 my-2 px-2 border-y-2 border-white ";

const skills_heading_style =
  " display-2 m-3 border-3 border-black text-black rounded- badge bg-white font-bold p-3  font-bold drop-shadow-lg shadow-black flex-center font-mono text-2xl  hover:overline ";
//-------------------------------------------------------------------------------------------------
function Skills() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div className="bg-zinc-900">
      <div id="Skills">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className={background}>
          <p className={skills_heading_style} onClick={topFunction}>
            [Skills]
          </p>
          <div className="container mx-auto flex items-center justify-center m-4 p-5">
            <div className="row">
              <div className="col-12 ">
                <div className={div_class}>
                  <p className={skill_style}>Java: {java_skill}%</p>
                  <ProgressBar
                    className="w-100 h-25"
                    striped
                    variant="success"
                    animated
                    now={java_skill}
                    label={`${java_skill}%`}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className={div_class}>
                  <p className={skill_style}>Python: {python_skill}%</p>
                  <ProgressBar
                    className="w-100 h-25"
                    striped
                    variant="info"
                    animated
                    now={python_skill}
                    label={`${python_skill}%`}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={div_class}>
                  <p className={skill_style}>CSS: {css_skill}%</p>
                  <ProgressBar
                    className="w-100 h-25"
                    striped
                    variant="warning"
                    animated
                    now={css_skill}
                    label={`${css_skill}%`}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className={div_class}>
                  <p className={skill_style}>ReactJS: {reactjs_skill}%</p>
                  <ProgressBar
                    className="w-100 h-25"
                    striped
                    variant="secondary"
                    animated
                    now={reactjs_skill}
                    label={`${reactjs_skill}%`}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={div_class}>
                  <p className={skill_style}>HTML: {html_skill}%</p>
                  <ProgressBar
                    className="w-100 h-25"
                    animated
                    now={html_skill}
                    label={`${html_skill}%`}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className={div_class}>
                  <p className={skill_style}>Django: {django_skill}%</p>
                  <ProgressBar
                    className="w-100 h-25"
                    striped
                    variant="danger"
                    animated
                    now={django_skill}
                    label={`${django_skill}%`}
                  />
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Skills;
