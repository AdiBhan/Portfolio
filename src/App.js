//-------------------------------------------------------------------------------------------------
// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footers from "./components/Footers";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
//-------------------------------------------------------------------------------------------------
function App() {
  return (
    <div className="App">
      <div class="overflow-y-auto h-500">
        <Navbar></Navbar>

        <Journey></Journey>
        <Projects></Projects>
        <Skills></Skills>
        <Footers></Footers>
      </div>
    </div>
  );
}
export default App;
