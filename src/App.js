import React from "react";
import NaviBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import SigninPage from "./page/SigninPage";
// import Refleksi from "./page/Refleksi";
// import Module from "./page/Module";
// import Kelas from "./page/Kelas";
// import LandingPage from "./page/LandingPage";
// import SignupPage from "./page/SignupPage";


function App() {
  return (
    <div className="App">
      <NaviBar />
      {/* <Module></Module> */}
      {/* <Refleksi></Refleksi> */}
      {/* <LandingPage></LandingPage> */}
      {/* <SignupPage></SignupPage> */}
      <SigninPage></SigninPage>
    </div>
  );
}

export default App;
