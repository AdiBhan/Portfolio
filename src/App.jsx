//-------------------------------------------------------------------------------------------------
// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Buffer from "./components/ErrorSite";
import Footers from "./components/Footers";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Schedule from "./components/Schedule";
//-------------------------------------------------------------------------------------------------
const background =
  "p-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black p-2";
//--------------------------------------------------------------------------------------------------
function App() {
  return (
    <HashRouter>
      <div className="w-full h-full App bg-zinc-900">
        <Navbar background={background} />
        <Switch>
          <Route path="/" exact>
            <Journey background={background} />
          </Route>
          <Route path="/Project/">
            <Projects background={background} />
          </Route>

          <Route path="/Contact/">
            <Contact background={background} />
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
    </HashRouter>
  );
}
export default App;
