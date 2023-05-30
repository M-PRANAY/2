import "./App.css";
// import About from "./Components/About";
// import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="Yeah" /> */}
      {/* <Navbar /> */}
      <div className="container my-3 ">
        {/* <About /> */}
        <Textform heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
