import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, Setmode] = useState("dark");
  const togglemode = () => {
    if (mode === "light") {
      Setmode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      Setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="Yeah" /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
        <Alert alert="NO" />
        <div className="container my-3 ">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={
                <Textform heading="Enter the text to analyze" mode={mode} />
                // <About />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
