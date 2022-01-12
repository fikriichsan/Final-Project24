import React from "react";
import NaviBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
// import Modul6 from "./page/Modul6";
import Modul5 from "./page/Modul5";
// import Module from "./page/Module";
// import Kelas from "./page/Kelas";
// import LandingPage from "./page/LandingPage";
// import SignupPage from "./page/Admin/SignupPage";
// import SigninPage from "./page/SigninPage";


function App() {
  return (
    <div className="App">
      <NaviBar />
      {/* <Module></Module> */}
      {/* <Kelas></Kelas> */}
      {/* <Refleksi></Refleksi> */}
      {/* <LandingPage></LandingPage> */}
      {/* <SignupPage></SignupPage> */}
      {/* <SigninPage></SigninPage> */}
      <Modul5></Modul5>
      {/* <Modul6></Modul6> */}
    </div>
  );
}

export default App;
