//-------------------------------------------------------------------------------------------------
// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Footers from "./components/Footers";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
//-------------------------------------------------------------------------------------------------
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//--------------------------------------------------------------------------------------------------
function App() {
  return (
    <HashRouter>
      <div className="App ">
        <Navbar></Navbar>
        <HashRouter path="/" exact>
          <Journey></Journey>
        </HashRouter>
        <HashRouter path="/Projects">
          <Projects></Projects>
        </HashRouter>
        <HashRouter path="/Skills">
          <Skills></Skills>
        </HashRouter>{" "}
        <HashRouter path="/Contact">
          <Contact></Contact>
        </HashRouter>
        <Footers></Footers>
      </div>
    </HashRouter>
  );
}
export default App;
