import React from "react";
import NaviBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Modul5 from "./page/Modul5";
import Modul6 from "./page/Modul6";

function App() {
  return (
    <div className="App">
      <NaviBar />
      <Modul5 />
      <Modul6 />
    </div>
  );
}

export default App;
