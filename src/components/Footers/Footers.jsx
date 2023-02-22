import React from "react";
import "semantic-ui-css/semantic.min.css";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const footer_text =
  "sub header scale-125 italic z-50 bounce2  text-sm text-right text-gray-400 sm:text-center text-white dark:text-zinc-100";
const footer_hover =
  "sub header scale125 z-50 bounce2  hover:text-blue-500 hover:underline hover:scale-110";
const footer_style =
  "z-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black";
//-------------------------------------------------------------------------------------------------

function Footers(props) {
  return (
    <>
      <div className={footer_style}>
        <div className={props.background}>
          <footer class={props.background}>
            <p></p>
            <span class={footer_text}>
              All Rights Reserved | Created by Adi Bhan with ❤️ from GitHub ➡️{" "}
              <a
                href="https://github.com/AdiBhan/Portfolio"
                class={footer_hover}
              >
                Click to view source
              </a>{" "}
            </span>
          </footer>{" "}
        </div>
      </div>
    </>
  );
}
export default Footers;
