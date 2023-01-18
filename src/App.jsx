//-------------------------------------------------------------------------------------------------
// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
      <div className="App ">
        <Navbar></Navbar>
        <Route path="/" exact>
          <Journey></Journey>
        </Route>
        <Route path="/Projects">
          <Projects></Projects>
        </Route>
        <Route path="/Skills">
          <Skills></Skills>
        </Route>

        <Route path="/Contact">
          <Contact></Contact>
        </Route>
        <Footers></Footers>
      </div>
    </Router>
  );
}
export default App;
