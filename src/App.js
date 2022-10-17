import logo from './logo.svg';
import './App.css'


import Headings from "./components/Headings";
import Body from "./components/body";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonGroup } from 'react-bootstrap';


function App() {
  return (
    
    <div className="App">
      
      
        <p className = "text-xs font-sans shadow-md caret-gray-900 bg-purple-800 text-fuchsia-50" >...</p>

        <Headings></Headings>
        <Body></Body>

       
    </div>
  );
}




export default App;
