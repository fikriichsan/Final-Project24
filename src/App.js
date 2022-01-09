import React from "react";
import NaviBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
// import Refleksi from "./page/Refleksi";
// import Module from "./page/Module";
// import Kelas from "./page/Kelas";
import LandingPage from "./page/LandingPage";


function App() {
  return (
    <div className="App">
      <NaviBar />
      {/* <Kelas></Kelas> */}
      {/* <Module></Module> */}
      {/* <Refleksi></Refleksi> */}
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
