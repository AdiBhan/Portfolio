import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./footer.css";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const footer_text =
  "sub header scale-125 italic z-50 bounce2  text-sm text-right text-gray-400 sm:text-center text-white  w-full";

const footer_style =
  "z-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  w-full";
//-------------------------------------------------------------------------------------------------

function Footers(props) {
  return (
    <>
      <div className={`${footer_style} footer_style`}>
        <span class={`${footer_text} footer_text_mobile footer_text_sty`}>
          All Rights Reserved | 2023 Aditya Bhan ©
        </span>
      </div>
    </>
  );
}
export default Footers;
