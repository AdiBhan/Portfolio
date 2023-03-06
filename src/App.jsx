//-------------------------------------------------------------------------------------------------
// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Buffer from "./components/404/ErrorPage";
import Design from "./components/Background/Design";
import Contact from "./components/Contact/Contact";
import Footers from "./components/Footers/Footers";
import JourneyHolder from "./components/Journey/JourneyHolder";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/ProjectsHolder";
import Schedule from "./components/Schedule/Schedule";
import "./styles/index.css";
//-------------------------------------------------------------------------------------------------
const background =
  "p-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black p-2 bg-cover bg-center bg-cover bg-no-repeat overflow-x-hidden";
const divider = "ui divider";
const background_buffer =
  "w-full h-full App bg-zinc-900 overflow-x-hidden overflow-y-hidden";
//--------------------------------------------------------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <Design />

      <div className={background_buffer}>
        <Navbar background={background} />
        <Switch>
          <Route path="/" exact>
            <JourneyHolder background={background} divider={divider} />
          </Route>
          <Route path="/Project/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Projects background={background} divider={divider} />
            </motion.div>
          </Route>

          <Route path="/Contact/">
            <Contact background={background} divider={divider} />
          </Route>
          <Route path="/Schedule/">
            <Schedule background={background} />
          </Route>
          <Route path="/Success/">
            <Buffer
              heading="Success!"
              subtext="Your email has been sent. Expect to get a response shortly."
            />
          </Route>
          <Route path="*">
            <Buffer
              heading="Error 404!"
              subtext="Page not found!"
              background={background}
            />
          </Route>
        </Switch>
        <Footers />
      </div>
    </BrowserRouter>
  );
}
export default App;
