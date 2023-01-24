//-------------------------------------------------------------------------------------------------
// IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import Snow from "react-snow-effect";
import "semantic-ui-css/semantic.min.css";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const hover_style =
  "text-black hover: text-blue-200 hover:scale-110 bg h-full hover:text-bold hover: text-black hover:overline rounded-3xl text-2xl from-cyan-100 hover:text-bold ";
const header_style =
  "   badge rounded-pill text-bg-white font-mono text-white h-full rounded-2x1 border-spacing-2 nav-link active ";
const background =
  "scale-95 hover:scale-100 p-2 bg-zinc-800 rounded-lg border-2 border-white ";
const navigation_bar_style =
  "  border-8 border-gray-700 rounded-bl-full rounded-br-full nav-justified navbar navbar-dark  nav p-1 bg-white relative flex flex-row shadow-xl justify-center border-y-2 border-black border-";
//-------------------------------------------------------------------------------------------------

function Navbar(props) {
  return (
    <>
      <div className={props.background}>
        <div className={background}>
          <nav className={navigation_bar_style}>
            <Link className={header_style} to="/">
              <button className={hover_style}>Journey </button>
            </Link>

            <Link className={header_style} to="/Project/">
              <button className={hover_style} variant="outline success">
                Projects{" "}
              </button>
            </Link>

            <Link className={header_style} to="/Contact/">
              <button className={hover_style} variant="outline success">
                Contact{" "}
              </button>
            </Link>
          </nav>
        </div>

        <Snow
          style={{
            position: "absolute",
            zIndex: "-100",
            width: "100%",
            height: "100%",
            color: "red",
          }}
          color={"#FFFFFF"}
          numFlakes={500}
          snowflakeSize={10}
          animationInterval={20}
          animationDuration={2500}
        />
      </div>
    </>
  );
}
export default Navbar;
