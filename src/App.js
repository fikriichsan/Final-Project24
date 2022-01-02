import React from "react";
import NaviBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
// import MelanjutkanKarya from "./page/MelanjutkanKarya";
import Refleksi from "./page/Refleksi";
// import Module from "./page/Module";
import Modul5 from "./page/Modul5"

function App() {
  return (
    <div className="App">
      <NaviBar />
      {/* <Module></Module> */}
      {/* <Modul5></Modul5> */}
      <Refleksi></Refleksi>
      {/* <MelanjutkanKarya></MelanjutkanKarya> */}
    </div>
  );
}

export default App;
