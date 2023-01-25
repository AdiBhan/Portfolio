//-------------------------------------------------------------------------------------------------
// TAILWIND CSS Styling
const section_style = "m-3 border border-white btn btn-dark";
//-------------------------------------------------------------------------------------------------
const Section = (props) => {
  return (
    <div>
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
  );
};

export default Section;
