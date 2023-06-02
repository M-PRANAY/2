import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

function App() {
  const[mode,Setmode] = useState('dark');
  const togglemode = () => {
    if(mode === 'light'){
      Setmode('dark');
      document.body.style.backgroundColor = 'black'
    }
    else{
      Setmode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="Yeah" /> */}
      <Alert alert="NO"/>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <div className="container my-3 ">
        <About mode={mode}  />
        <Textform heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
