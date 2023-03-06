//-------------------------------------------------------------------------------------------------
// IMPORTS
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../../styles/navbar.css";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const hover_style =
  "text-black  text-blue-200 bg h-full hover:text-bold hover: text-black hover: rounded-3xl text-2xl from-cyan-100 hover:text-bold ";
const header_style =
  "   badge rounded-pill text-bg-white font-mono text-white h-full rounded-2x1 border-spacing-2 nav-link active ";
const background =
  "mt-1 scale-95 hover:scale-100 p-2 bg-zinc-800 rounded-lg border-2 border-white ";
const navigation_bar_style =
  "  border-8 border-gray-700 rounded-bl-full rounded-br-full nav-justified navbar navbar-dark  nav p-1 bg-white relative flex flex-row shadow-xl justify-center border-y-2 border-black border-";
//-------------------------------------------------------------------------------------------------

function Navbar(props) {
  return (
    <>
      <div className="sticky top-0 z-50 bg-transparent navbar_style">
        {" "}
        <div className={background}>
          <nav className={navigation_bar_style}>
            <Link className={header_style} to="/">
              <motion.div
                whileHover={{
                  boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.4)",
                  scale: 1.05,
                  transition: { duration: 1 },
                }}
              >
                <button className={hover_style}>Journey </button>
              </motion.div>
            </Link>

            <Link className={header_style} to="/Project/">
              <motion.div
                whileHover={{
                  boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
                  scale: 1.05,

                  transition: { duration: 1 },
                }}
              >
                <button className={hover_style} variant="outline success">
                  Projects{" "}
                </button>
              </motion.div>
            </Link>

            <Link className={header_style} to="/Contact/">
              <motion.div
                whileHover={{
                  boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
                  scale: 1.05,
                  transition: { duration: 1 },
                }}
              >
                <button className={hover_style} variant="outline success">
                  Contact{" "}
                </button>
              </motion.div>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;
