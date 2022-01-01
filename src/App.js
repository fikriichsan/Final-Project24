import React from "react";
import NaviBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import Refleksi from "./page/Refleksi";
// import Module from "./page/Module";

function App() {
  return (
    <div className="App">
      <NaviBar />
      <Refleksi></Refleksi>
      {/* <Module></Module> */}
    </div>
  );
}

export default App;
